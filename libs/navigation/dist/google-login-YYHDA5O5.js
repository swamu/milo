import"./chunk-YBWLHNHN.js";var d="https://accounts.google.com/gsi/client",l="530526366930-l874a90ipfkn26naa71r010u8epp39jt.apps.googleusercontent.com",c="feds-googleLogin",r="feds-profile",g=async(i,n,t)=>{let o,e=t();try{o=new URL(typeof e.googleLoginURLCallback=="function"?await e.googleLoginURLCallback():i("google-login-redirect"))?.href}catch{}await window.adobeIMS.socialHeadlessSignIn({provider_id:"google",idp_token:n?.credential,client_id:window.adobeid?.client_id,scope:window.adobeid?.scope}).then(()=>{window.DISABLE_PAGE_RELOAD!==!0&&(o?window.location.assign(o):window.location.reload())}).catch(()=>{window.adobeIMS.signInWithSocialProvider("google",{redirect_uri:o||window.location.href})})};async function s(i,n,t,o){try{await i()}catch{return}if(window.adobeIMS?.isSignedInUser())return;await t(d);let e=document.createElement("div");e.id=c,document.querySelector(`.${r}`)?.append(e),window.google?.accounts?.id?.initialize({client_id:l,callback:a=>g(n,a,o),prompt_parent_id:c,cancel_on_tap_outside:!1}),window.google?.accounts?.id?.prompt()}export{s as default};
