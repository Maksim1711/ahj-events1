(()=>{"use strict";class e{constructor(e){this.gameElement=e,this.scoreElement=e.querySelector(".results .score"),this.missElement=e.querySelector(".results .miss")}init(){this.score=0,this.miss=0,this.gameElement.addEventListener("click",(e=>{const t=e.target.closest(".col");if(t){const e=t.querySelector(".head");e&&(this.hit(),e.remove())}}))}hit(){this.score+=1,this.scoreElement.innerText=this.score}missed(){this.miss+=1,this.missElement.innerText=this.miss}}new class{constructor(t){this.cells=t.querySelectorAll(".col"),this.goblinHead=t.querySelector(".head"),this.game=new e(t)}init(){this.goblinHead.remove(),this.game.init(),this.rotate()}rotate(){let e=0,t=0;const s=setInterval((()=>{for(;!(t=Math.floor(Math.random()*(this.cells.length-1))););this.cells[e].querySelector(".head")&&(this.game.missed(),5===this.game.miss&&clearInterval(s)),e=t,this.cells[t].appendChild(this.goblinHead)}),1e3)}}(document.querySelector(".goblin")).init()})();