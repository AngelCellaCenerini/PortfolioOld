class IntroText {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.opacity = 0;
    this.transparency = 10;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;
    this.acceleration = 0.08;
    this.active = false;
  }

  update(){
    if (this.active){
      this.display();
      this.move();
      this.stop();
      this.reveal();
    }
  }

  move(){
    // Move
    this.y = this.y + this.vy;
    this.vy = this.speed;
    // Decelerate
    this.speed = this.speed - this.acceleration;
  }

  stop(){
    if (this.speed <= 0){
      this.speed = 0;
      this.acceleration = 0;
    }
  }

  reveal(){
    this.opacity = this.opacity + this.transparency;
    if (this.opacity >= 255){
      this.transparency = 0;
    }
  }

  reset(){
    // Deactivate
    this.active = false;
    // Reset Position
    this.x = width/2;
    this.y = height/2 + 70;
    // Reset opacity
    this.opacity = 0;
    // Reset Values
    this.speed = 2;
    this.acceleration = 0.08;
    this.transparency = 10;

  }

  display(){
    push();
    // Text
    fill(42, 42, 42, this.opacity);
    textSize(18);
    text(`Computation Arts | Concordia University`, this.x, this.y);
    pop();
  }
}