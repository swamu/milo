import"./chunk-YBWLHNHN.js";var w=async(e,n,i,s)=>{let t=e(),o=n("jarvis-chat")?.toLowerCase();if(!o||!["mobile","desktop","on"].includes(o)||!t.jarvis?.id||!t.jarvis?.version)return;let c=window.matchMedia("(min-width: 900px)").matches;if(o==="mobile"&&c||o==="desktop"&&!c)return;let{initJarvisChat:a}=await import("./jarvis-chat-7JAHTS6A.js");a(t,i,s,n)},p=async(e,n)=>{let i="7a5eb705-95ed-4cc4-a11d-0cc5760e93db",s={"hlx.page":"3a6a37fe-9e07-4aa9-8640-8f358a623271-test","hlx.live":"926b16ce-cc88-4c6a-af45-21749f3167f3-test"},t=s?.[Object.keys(s).find(o=>window.location.host.includes(o))]??(e()?.privacyId||i);window.fedsConfig={privacy:{otDomainId:t},documentLanguage:!0},n("https://www.adobe.com/etc.clientlibs/globalnav/clientlibs/base/privacy-standalone.js"),document.addEventListener("click",o=>{o.target.closest('a[href*="#openPrivacy"]')&&(o.preventDefault(),window.adobePrivacy?.showPreferenceCenter())})},f=async(e,n,i,s)=>{let t=e("google-login")?.toLowerCase();if(window.adobeIMS?.isSignedInUser()||!["mobile","desktop","on"].includes(t))return;let o=window.matchMedia("(min-width: 900px)").matches;if(t==="mobile"&&o||t==="desktop"&&!o)return;let{default:c}=await import("./google-login-YYHDA5O5.js");c(n,e,i,s)},m=([e,n,i,s,t],o=3e3)=>new Promise(c=>{setTimeout(()=>{if(p(e,i),w(e,n,i,s),f(n,t,i,e),n("interlinks")==="on"){let{locale:a}=e(),d=`${a.contentRoot}/keywords.json`,l=a.ietf?.split("-")[0];import("./interlinks-U3ZBSGN7.js").then(r=>{r.default(d,l),c(r)})}else c(null);import("./samplerum-X27QZ7WO.js").then(({sampleRUM:a})=>a())},o)}),u=m;export{u as default,f as loadGoogleLogin,w as loadJarvisChat,p as loadPrivacy};
