/* eslint-disable */
import { getSharepointConfig } from '../../../tools/loc/config.js';
import { loadScript, getConfig as gConfig } from '../../utils/utils.js';

const config = gConfig();
const base = config.miloLibs || config.codeRoot;
let accessToken = null;
let connected = false;
const retryFlag = false;

const nameList = [
  'Time','Past','Future','Dev',
  'Fly','Flying','Soar','Soaring','Power','Falling',
  'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
  'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
  'Kitty','Kitten','Zero','Memory','Trooper','Bandit',
  'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
  'Mine','Your','Worst','Enemy','Hostile','Force','Video',
  'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
  'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
  'Script','Writer','Near','Close','Open','Cube','Circle',
  'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
  'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
  'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
  'Ice','Cold','Rotten','Sick','Sickly','Camel','Rooster',
  'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
  'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
  'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
  'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
  'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
  'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
  'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

function generateFileName() {
 return `paywall-${nameList[Math.floor( Math.random() * nameList.length )].toLowerCase()}`;
};

function validateConnection() {
  if (!accessToken) {
    throw new Error('You need to sign-in first');
  }
}

function getAuthorizedRequestOption({
  body = null,
  json = true,
  method = 'GET',
} = {}) {
  validateConnection();
  const bearer = `Bearer ${accessToken}`;
  const headers = new Headers();
  headers.append('Authorization', bearer);
  if (json) {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = typeof body === 'string' ? body : JSON.stringify(body);
  }

  return options;
}

async function fetchWithRetry(apiUrl, options, retryCounts) {
  // check if retryFlag is enabled
  let retryCount = retryCounts;
  if (!retryFlag) {
    return fetch(apiUrl, options);
  }

  retryCount = retryCount || 0;

  return new Promise((resolve, reject) => {
    const currentTime = Date.now();
    if (retryCount > reqThresh) {
      reject();
    } else if (nextCallAfter !== 0 && currentTime < nextCallAfter) {
      setTimeout(
        () => fetchWithRetry(apiUrl, options, retryCount).then((newResp) => resolve(newResp))
          .catch((err) => reject(err)),
        nextCallAfter - currentTime,
      );
    } else {
      retryCount += 1;
      fetch(apiUrl, options).then((resp) => {
        const retryAfter = resp.headers.get('ratelimit-reset') || resp.headers.get('retry-after') || 0;
        if ((resp.headers.get('test-retry-status') === TOO_MANY_REQUESTS) || (resp.status === TOO_MANY_REQUESTS)) {
          nextCallAfter = Date.now() + retryAfter * 1000;
          fetchWithRetry(apiUrl, options, retryCount)
            .then((newResp) => resolve(newResp)).catch((err) => reject(err));
        } else {
          nextCallAfter = retryAfter ? Math.max(Date.now() + retryAfter * 1000, nextCallAfter)
            : nextCallAfter;
          resolve(resp);
        }
      })
        .catch((err) => reject(err));
    }
  });
}

async function createUploadSession(sp, file, dest, filename) {
  const payload = {
    ...sp.api.file.createUploadSession.payload,
    description: 'Preview file',
    fileSize: file.size,
    name: filename,
  };
  const options = getAuthorizedRequestOption({ method: sp.api.file.createUploadSession.method });
  options.body = JSON.stringify(payload);

  const baseURI = sp.api.file.createUploadSession.baseURI;

  const createdUploadSession = await fetchWithRetry(`${baseURI}${dest}:/createUploadSession`, options);
  return createdUploadSession.ok ? createdUploadSession.json() : undefined;
}

async function connect() {
  await loadScript(`${base}/deps/msal-browser-2.34.0.js`);
  await loadScript(`${base}/deps/docx.js`);
  
  const sp = getSharepointConfig({
    sp: {
      data:[
        {
          "site":"https://graph.microsoft.com/v1.0/sites/adobe.sharepoint.com,d21b93ad-c3bc-4896-b58e-fd76f04c2834,563e43e2-09db-47a2-8d99-92b6161a051b",
          "rootFolders":"/milo",
          "clientId":"008626ae-f818-43d8-9d7f-26afe05e771d",
          "authority":"https://login.microsoftonline.com/fa7b1b5a-7b34-4387-94ae-d2c178decee1",
          "shareurl":"https://adobe.sharepoint.com/:f:/r/sites/adobecom/Shared%20Documents/milo<relativePath>?web=1",
          "skipMerge":"false"
        }
      ]
    }
  });
  const publicClientApplication = new msal.PublicClientApplication(sp.clientApp);
  let account = publicClientApplication.getAllAccounts()[0];
  if (!account) {
    await publicClientApplication.loginPopup(sp.login);
    account = publicClientApplication.getAllAccounts()[0];
  }
  const accessTokenRequest = {
    scopes: ['files.readwrite', 'sites.readwrite.all'],
    account,
  };

  try {
    const res = await publicClientApplication.acquireTokenSilent(accessTokenRequest);
    accessToken = res.accessToken;
    connected = true;
  } catch (error) {
    // Acquire token silent failure, and send an interactive request
    if (error.name === 'InteractionRequiredAuthError') {
      try {
        const res = await publicClientApplication.acquireTokenPopup(accessTokenRequest);
        // Acquire token interactive success
        accessToken = res.accessToken;
        connected = true;
      } catch (err) {
        throw new Error(`Cannot connect to Sharepoint: ${err.message}`);
      }
    }
  }
  console.log(accessToken, connected, sp);
  return sp;
}

async function createSessionAndUploadFile(sp, file, dest, filename) {
  const createdUploadSession = await createUploadSession(sp, file, dest, filename);
  const status = {};
  if (createdUploadSession) {
    const uploadSessionUrl = createdUploadSession.uploadUrl;
    if (!uploadSessionUrl) {
      return status;
    }
    status.sessionUrl = uploadSessionUrl;
    const uploadedFile = await uploadFile(sp, uploadSessionUrl, file);
    if (!uploadedFile) {
      return status;
    }
    if (uploadedFile.ok) {
      status.uploadedFile = await uploadedFile.json();
      status.success = true;
    } else if (uploadedFile.status === 423) {
      status.locked = true;
    }
  }
  return status;
}

async function uploadFile(sp, uploadUrl, file) {
  const options = getAuthorizedRequestOption({
    json: false,
    method: sp.api.file.upload.method,
  });
  // TODO API is limited to 60Mb, for more, we need to batch the upload.
  options.headers.append('Content-Length', file.size);
  options.headers.append('Content-Range', `bytes 0-${file.size - 1}/${file.size}`);
  options.headers.append('Prefer', 'bypass-shared-lock');
  options.body = file;
  return fetchWithRetry(`${uploadUrl}`, options);
}

function generate(url, text) {
  const doc = new window.docx.Document({
    sections: [
      {
        properties: {},
        children: [
          new window.docx.Paragraph({
            children: [
                new window.docx.ExternalHyperlink({
                    children: [
                        new window.docx.TextRun({
                            text,
                            style: "Hyperlink",
                        }),
                    ],
                    link: url,
                }),
            ],
          }),
        ]
      }
    ]
  });
  return docx.Packer.toBlob(doc);
}

export const initDraft = async (url, text) => {
  const sp = await connect();
  const obj = { hello: "world" };
  const file = await generate(url, text);
  const fileName = generateFileName()+'.docx';
  const status = await createSessionAndUploadFile(sp, file, `/drafts/sarangi/hack/paywalls/${fileName}`, 'xyz');
  return fileName;
};
