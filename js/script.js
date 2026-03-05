/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e=>{
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* BOOT SCREEN */

const bootLines = [
  "booting nexus...",
  "loading kernel...",
  "connecting to darknet...",
  "bypassing firewall...",
  "access granted."
];

const bootText = document.getElementById("bootText");

let i = 0;

function boot(){

  if(i < bootLines.length){

    bootText.textContent += bootLines[i] + "\n";
    i++;

    setTimeout(boot,600);

  }else{

    setTimeout(startSite,1000);

  }

}

boot();

function startSite(){

  document.getElementById("boot").style.display="none";
  document.querySelector(".main").classList.remove("hidden");

  typeAscii();

}

/* ASCII */

const asciiArt = `

███╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗
████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔════╝
██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║███████╗
██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║╚════██║
██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝███████║
╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝

`;

let index = 0;

const ascii = document.getElementById("ascii");

function typeAscii(){

  if(index < asciiArt.length){

    ascii.textContent += asciiArt[index];
    index++;

    setTimeout(typeAscii,3);

  }

}

/* MATRIX RAIN */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;

const columns = canvas.width / fontSize;

const drops = [];

for(let x=0;x<columns;x++)
  drops[x]=1;

function drawMatrix(){

  ctx.fillStyle="rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle="#0f0";
  ctx.font=fontSize+"px monospace";

  for(let i=0;i<drops.length;i++){

    const text = letters[Math.floor(Math.random()*letters.length)];

    ctx.fillText(text,i*fontSize,drops[i]*fontSize);

    if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
      drops[i]=0;

    drops[i]++;

  }

}

setInterval(drawMatrix,35);
