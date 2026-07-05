const parts=["./assets/js_v19_final_p1.js","./assets/js_v19_final_p2.js","./assets/js_v19_final_p3.js","./assets/js_v19_final_p4.js","./assets/js_v19_final_p5.js","./assets/js_v19_final_p6.js","./assets/js_v19_final_p7.js","./assets/js_v19_final_p8.js"];
let i=0;
function loadNext(){if(i>=parts.length)return;const s=document.createElement('script');s.type='module';s.src=parts[i];s.onload=()=>{i++;loadNext()};s.onerror=()=>console.error('Failed to load '+parts[i]);document.head.appendChild(s);}
loadNext();