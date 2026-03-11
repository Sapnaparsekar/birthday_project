// Simple Fireworks Effect

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(){

let x = Math.random()*canvas.width;
let y = Math.random()*canvas.height/2;

for(let i=0;i<50;i++){

particles.push({
x:x,
y:y,
vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,
life:60
});

}

}

function updateFireworks(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.vx;
p.y+=p.vy;
p.life--;

ctx.fillStyle="yellow";
ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fill();

if(p.life<=0){
particles.splice(index,1);
}

});

requestAnimationFrame(updateFireworks);

}

setInterval(createFirework,2000);
updateFireworks();