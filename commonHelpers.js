import{a as S,S as b,i}from"./assets/vendor-BjmtRwYh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const q="45288911-2aee760e8debc477a1c950329",w="https://pixabay.com/api/";async function m(r,t=1,a=15){const s=new URLSearchParams({key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a});try{return(await S.get(`${w}?${s.toString()}`)).data}catch(e){throw console.error("Error fetching images:",e),e}}const p=document.querySelector(".gallery");function f(r){const t=r.map(({webformatURL:a,largeImageURL:s,tags:e,likes:o,views:n,comments:g,downloads:L})=>`
    <li>
      <a href="${s}">
        <img src="${a}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes:<br /><span>${o}</span></p>
        <p>Views:<br /><span>${n}</span></p>
        <p>Comments:<br /><span>${g}</span></p>
        <p>Downloads:<br /><span>${L}</span></p>
      </div>
    </li>
  `).join("");p.insertAdjacentHTML("beforeend",t),new b(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function v(){p.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function y(){document.querySelector(".loader").classList.add("hidden")}function E(){document.querySelector("#load-more").classList.remove("hidden")}function u(){document.querySelector("#load-more").classList.add("hidden")}const $=document.querySelector(".search-form"),P=document.querySelector("#load-more");let l="",c=1,d=0;$.addEventListener("submit",async r=>{if(r.preventDefault(),l=r.currentTarget.elements.query.value.trim(),c=1,!l){i.error({message:"Please enter a search query!",position:"topRight"});return}v(),u(),h();try{const t=await m(l,c);d=t.totalHits,t.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(f(t.hits),d>15&&E())}catch(t){i.error({title:"Error",message:t.message})}finally{y()}});P.addEventListener("click",async()=>{c+=1,h();try{const r=await m(l,c);f(r.hits),c*15>=d?(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):B()}catch(r){i.error({title:"Error",message:r.message})}finally{y()}});function B(){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}u();
//# sourceMappingURL=commonHelpers.js.map
