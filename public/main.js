function isVisible(e){const n=e.getBoundingClientRect(),t=n.top+n.height/2;return t>=0&&t<=(window.innerHeight||document.documentElement.clientHeight)}function checkElements(){let e=document.getElementsByClassName("anim");for(let n=0;n<e.length;++n){let t=e[n];isVisible(t)&&(t.style["transition-delay"]=.4*Math.random()+"s",t.classList.add("anim-fadein"))}}document.addEventListener("scroll",checkElements),window.addEventListener("load",checkElements),window.addEventListener("resize",checkElements);