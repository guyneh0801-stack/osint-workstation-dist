const parts=["./assets/js_bundle_v19_p1.js","./assets/js_bundle_v19_p2.js","./assets/js_bundle_v19_p3.js","./assets/js_bundle_v19_p4.js"];
let i=0;
function loadNext(){if(i>=parts.length)return;const s=document.createElement('script');s.type='module';s.src=parts[i];s.onload=()=>{i++;loadNext()};s.onerror=()=>console.error('Failed to load '+parts[i]);document.head.appendChild(s);}
loadNext();