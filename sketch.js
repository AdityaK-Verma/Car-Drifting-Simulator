var ship

function setup() {
  createCanvas(600, 400);
  ship = new ship();
}

function draw() {
  background(0);
  ship.render();
  ship.turn()
  ship.update()
}
function keyReleased(){
  ship.setRotation(0);
  ship.boosting(false);
}



function keyPressed(){
  if (keyCode  == RIGHT_ARROW){
    ship.setRotation (0.1);
  }else if (keyCode == LEFT_ARROW){
    ship.setRotation (-0.1);
  }else if (keyCode == UP_ARROW){
    ship.boosting(true)
  }
  
}

function ship(){
  this.pos = createVector(width/2,height/2)
  this.r = 20
  this.heading = 0
  this.rotation =  0
   this.vel = createVector(0,0)
  this.isBoosting = false
  
  
  
 this.update = function(){
if (this.isBoosting){
    this.boost()
} 
   this.pos.add(this.vel)
    this.vel.mult(0.99)
  } 

  
  this.boosting = function(b){
    this.isBoosting = b
  }
  
  
 
  
  this.boost = function(){
var force = p5.Vector.fromAngle(this.heading)
  force.mult(0.1)   
  this.vel.add(force)

}
 
  
  
  
this.render = function(){
  translate(this.pos.x,this.pos.y)
 rotate(this.heading + PI/2);
  noFill()
  stroke(255)
        
  triangle(-this.r,this.r,this.r,this.r,0,-this.r)

  }          
 this.setRotation = function(a){
   this.rotation = a
 }
  
  
  this.turn = function(){
    this.heading += this.rotation
  }

}
  
