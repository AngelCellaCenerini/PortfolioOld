class UncoverEffect {
  constructor(x, y, x2, y2){
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.width = 250;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    this.speed2 = 0;
    this.acceleration = 0.2;
  }

  update(logoButton){
    this.display();
    this.move();
    this.stop(logoButton);
  }

  move(){
    // Move
    this.y = this.y + this.vy;
    this.vy = this.speed;
    // Accelerate
    this.speed = this.speed + this.acceleration;
  }

  stop(logoButton){
    if(this.y > 3*height/2){
      this.acceleration = 0;
      logoButton.active = true;
    }
  }

  display(){

    push();
    fill(254, 253, 249);
    rect(this.x, this.y, this.width);
    pop();
  }
}
