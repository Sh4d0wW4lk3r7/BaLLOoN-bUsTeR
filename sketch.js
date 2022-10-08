var gb,bb,yb,rb,a,b,a2,b2
function preload(){
gb=loadImage("GrEeN BaLLoOnS.png")
rb=loadImage("ReD BaLLoOnS.png")  
yb=loadImage("GoLd BaLLoOnS.png") 
bb=loadImage("BlOo BaLLoOnS.png") 
a=loadImage("ArRoW.png")
b=loadImage("BoW & aRrOw.png")
}
function setup() {
  createCanvas(1300,400);
  b1=createSprite(1150,200,)
  b1.addImage(b)
  b1.scale=0.5
}
var pr=1
function draw() 
{  
  background(255);
if(frameCount % 100==0){
var b=createSprite(-10,random(50,390))
var r=Math.round(random(1,4))
while(r==pr){
 r=Math.round(random(1,4))  
}
pr=r
if(r==1){
  b.addImage(bb)
  b.scale=0.7  
}
if(r==2){
  b.addImage(gb) 
b.scale=0.03
}
  if(r==3){
    b.addImage(yb) 
  b.scale=0.4
  }  
    if(r==4){
      b.addImage(rb) 
    b.scale=0.7
    }  
b.velocityX=5
}
drawSprites()
}
function mousePressed(){
var ArRoW=createSprite(b1.x,b1.y) 
ArRoW.addImage(a)
ArRoW.velocityX=-3
console.log(51)
}




