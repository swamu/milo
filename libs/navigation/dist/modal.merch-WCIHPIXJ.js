import{a as c}from"./chunk-P5BLQZYT.js";import"./chunk-YBWLHNHN.js";var l=599,a=1199;window.addEventListener("pageshow",e=>{e.persisted&&document.querySelector(".dialog-modal.commerce-frame iframe")&&window.location.reload()});function m(e){if(!(window.location.hash||document.getElementById("checkout-link-modal")))return;let t="#checkout-link-modal";/=/.test(window.location.hash)||(t=`${t},div.dialog-modal.commerce-frame${window.location.hash}`);let i=document.querySelector(t),o=i?.querySelector("iframe"),n=i?.querySelector(".milo-iframe");if(!(!e||!o||!n))if(e==="100%")o.style.height="100%",n.style.removeProperty("height"),i.style.removeProperty("height");else{let s=document.documentElement.clientHeight-20;if(s<=0)return;let r=e>s?s:e;o.style.height="100%",n.style.height=`${r}px`,i.style.height=`${r}px`}}function d(e){let t=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);e.postMessage({mobileMax:l,tabletMax:a,viewportWidth:t},"*")}function h(e){d(e),window.addEventListener("resize",c(()=>d(e),10))}function u({data:e,source:t}){e==="viewportWidth"&&t&&h(t),e?.contentHeight&&m(e?.contentHeight)}function f({dialog:e,iframe:t}){/\/mini-plans\/.*mid=ft.*web=1/.test(t.src)?(e.classList.add("height-fit-content"),setTimeout(()=>{let{height:o}=window.getComputedStyle(t);o==="0px"&&(t.style.height="100%")},2e3)):t.style.height="100%"}async function g({dialog:e,iframe:t}){!e||!t||(f({dialog:e,iframe:t}),window.addEventListener("message",u))}export{l as MOBILE_MAX,a as TABLET_MAX,m as adjustModalHeight,f as adjustStyles,g as default,h as sendViewportDimensionsOnRequest,d as sendViewportDimensionsToIframe};
