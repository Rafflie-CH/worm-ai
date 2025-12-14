const c=document.createElement("canvas");
document.body.appendChild(c);
Object.assign(c.style,{position:"fixed",inset:0,zIndex:-1});
const x=c.getContext("2d");
let w,h,p;

function r(){w=c.width=innerWidth;h=c.height=innerHeight}
onresize=r;r();

p=[...Array(80)].map(()=>({
  x:Math.random()*w,y:Math.random()*h,
  vx:(Math.random()-.5)*.3,
  vy:(Math.random()-.5)*.3
}));

(function d(){
  x.clearRect(0,0,w,h);
  p.forEach(a=>{
    a.x+=a.vx; a.y+=a.vy;
    if(a.x<0||a.x>w)a.vx*=-1;
    if(a.y<0||a.y>h)a.vy*=-1;
    p.forEach(b=>{
      let dist=Math.hypot(a.x-b.x,a.y-b.y);
      if(dist<130){
        x.strokeStyle=`rgba(0,170,255,${1-dist/130})`;
        x.beginPath();
        x.moveTo(a.x,a.y);
        x.lineTo(b.x,b.y);
        x.stroke();
      }
    });
  });
  requestAnimationFrame(d);
})();