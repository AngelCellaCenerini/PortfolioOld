class UncoverEffect {
  constructor(x1, y1, x2, y2, x3, y3, x4, y4){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.x4 = x4;
    this.y4 = y4;
    this.width = 500;
    this.height = 20;
    this.size = 8;
    this.pupilSize = 0.1;
    this.growth = 0.2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.5;
    this.acceleration = 0.2;
    this.active = true;
    this.timer = 0;
    this.opacity = 255;
    this.transparency = 10;
    this.visible = true;
  }

  update(){
    this.timer++;
    if(this.active){
    setInterval(this.move(), 3000);
    // setTimeout(this.move(), 1000);
    // this.move();
    }

    this.fall();
    this.flash();
    this.stop();
    this.display();
  }

  move(){

    // if()
    // Move
    // if(this.timer > 1*60){
      this.x2 = this.x2 + 6;
    // }
    if(this.timer > 1*60){
      this.x1 = this.x1 + 6;
    }
    if(this.timer > 1.6*60){
      this.x3 = this.x3 + 6;
    }
    // this.x1 = this.x1 + 4;
    // this.x2 = this.x2 + 4;
    // this.x3 = this.x3 + 4;
    // console.log(`called`);
    // this.vx = this.speed;
    // Accelerate
    // this.speed = this.speed + this.acceleration;
  }

  fall(){

    // Make Black Dot drop
    // Phase 1 - SLower Descend
    if((this.y4 + this.size) <= 0){
      this.acceleration = 0;
      this.speed = 0.1;
    }
    // Phase 2 - Acceleration
    else if((this.y4 >= 6) && (this.y4 < (height/2 + 30))){
      this.speed = 0.6;
      this.acceleration = 5;
      this.y4 = this.y4 + this.vy;
      this.vy = this.speed;
      this.speed = this.speed + this.acceleration;
      // Start Growing
      this.grow();
    }
    // Stop
    // Check if Black Drop has reached image
    else if(this.y4 >= (height/2 + 30)){
      this.vy = 0;
      this.speed = 0;
      this.acceleration = 0;
      this.y4 = this.y4 + this.vy;
      this.visible = false;
      // this.vy = this.speed;
      // this.speed = this.speed + this.acceleration;
    }

    this.y4 = this.y4 + this.vy;
    this.vy = this.speed;
    this.speed = this.speed + this.acceleration;

    // Stop
    // Check if Black Drop has reached image
    // if(this.y4 >= (height/2)){
    //   this.speed = 0;
    //   this.acceleration = 0;
    // }

  }

  grow(){
    // Grow Black Drop Size as it descends
    this.size = this.size + this.growth;
  }

  flash(){
    // if(this.timer < 2*60){
    //   this.opacity = 255;
    // }
    // else if(this.timer > 2*60 && this.timer < 3*60){
    //   this.opacity = random(10, 230);
    // }
    // else if(this.timer < 4*60){
    //   this.opacity = 0;
    // }


  }

  stop(){
    if(this.x3 > width){
      this.active = false;
      clearInterval();
      // this.x = 2*width/3;
      // console.log(this.x1);
    }
  }

  display(){

    if(this.active){
    setInterval(this.move, 500);
    // this.move();
    }

    push();
    // Text Cover
    fill(254, 253, 249);
    rect(this.x1, this.y1, this.width, this.height);
    rect(this.x2, this.y2, this.width, this.height);
    rect(this.x3, this.y3, 3*this.width/2, this.height);
    fill(42);
    // Image Cover
    // fill(254, 253, 249, this.opacity);
    // rect(2*width/3 + 100, height/2 - 30, 120);
    // Check Drop Progress
    if(this.visible){
      // Black Dot
      fill(42);
      ellipse(this.x4, this.y4, this.size);
      // fill(254, 253, 249);
      // ellipse(this.x4, this.y4, this.pupilSize);
      // White Bar (Cover Black Drop)
      fill(254, 253, 249);
      rect(2*width/3 + 100, height/2 + 30, 120, 30);
      pop();
    }
  }
}
