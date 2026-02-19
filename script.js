// particles
const container=document.getElementById("hearts");

const heartsUp=["❤️","💖","💗","💓"];
const flowersDown=["🌹","🌸","🌼","💐"];

function createParticle(){
  if(!container) return;

  const item=document.createElement("div");
  const isHeart=Math.random()>0.5;

  if(isHeart){
    item.className="heart-up";
    item.innerHTML=heartsUp[Math.floor(Math.random()*heartsUp.length)];
    item.style.left=Math.random()*100+"vw";
    item.style.animationDuration=(4+Math.random()*4)+"s";
  }else{
    item.className="flower-down";
    item.innerHTML=flowersDown[Math.floor(Math.random()*flowersDown.length)];
    item.style.left=Math.random()*100+"vw";
    item.style.animationDuration=(5+Math.random()*5)+"s";
  }

  const size=20+Math.random()*26;
  item.style.fontSize=size+"px";

  container.appendChild(item);
  setTimeout(()=>item.remove(),10000);
}

setInterval(createParticle,450);

// vibration
const loveHeart=document.getElementById("loveHeart");
if(loveHeart){
  loveHeart.addEventListener("click",()=>{
    if(navigator.vibrate){
      navigator.vibrate([300,100,300]);
    }
  });
}

// music unlock
const music=document.getElementById("bgMusic");

function unlockAndPlay(){
  if(!music) return;

  music.volume=0.6;
  music.play().then(()=>{
    localStorage.setItem("musicUnlocked","true");
  }).catch(()=>{});
}

window.addEventListener("load",()=>{
  if(localStorage.getItem("musicUnlocked")==="true"){
    unlockAndPlay();
  }
});

["touchstart","click","pointerdown"].forEach(evt=>{
  document.addEventListener(evt,unlockAndPlay,{once:true});
});