import{f as l,h as n,k as c}from"./chunk-7TJA6U3A.js";import"./chunk-YBWLHNHN.js";var b=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32" fill="none" class="play-icon">
                        <path d="M24 16.0005L0 32L1.39876e-06 0L24 16.0005Z" fill="white"/>
                      </svg>`;function y(s,t,p){let{miloLibs:r,codeRoot:d}=l();c(`${r||d}/styles/consonant-play-button.css`);let o=p.split(":")[1],i=o.includes("-")?`btn-${o.split("-")[1]}`:"btn-large",e=s.querySelector("picture"),g=n("div",{class:"play-icon-container"},b),a=n("span",{class:"modal-img-link"});s.insertBefore(a,e),i&&t.classList.add(i),t.classList.add("consonant-play-btn"),t.setAttribute("aria-label","play"),t.append(g),a.append(e,t)}export{y as default};
