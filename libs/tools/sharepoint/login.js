/* global msal */
import { getMSALConfig } from './msal.js';
import { accessToken, accessTokenExtra, account } from './state.js';

const SCOPES = ['files.readwrite', 'sites.readwrite.all'];

export default async function login(
  {
    origin = window.location.origin,
    scopes = SCOPES,
    extraScopes,
    telemetry = {},
  },
) {
  const msalConfig = await getMSALConfig(telemetry, origin);
  const pca = new msal.PublicClientApplication(msalConfig);
  let tmpAccount = pca.getAllAccounts()[0];
  if (!tmpAccount) {
    await pca.loginPopup(msalConfig.login);
    [tmpAccount] = pca.getAllAccounts();
  }
  const reqDetails = { account: tmpAccount, scopes };
  try {
    const res = await pca.acquireTokenSilent(reqDetails);
    account.value = res.account;
    accessToken.value = res.accessToken;
    if (extraScopes) {
      const extraRes = await pca.acquireTokenSilent({ account: tmpAccount, scopes: extraScopes });
      accessTokenExtra.value = extraRes.accessToken;
    }
  } catch (err) {
    throw new Error(`Cannot connect to Sharepoint: ${err.message}`);
  }
}
