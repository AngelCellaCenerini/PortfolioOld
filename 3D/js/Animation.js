class Animation {
  constructor(x1, y1, x2, y2, animationWidth, animationHeight){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.width = animationWidth;
    this.height = animationHeight;
    this.vx1 = 0;
    this.vy1 = 0;
    this.vx2 = 0;
    this.vy2 = 0;
    this.speed1 = 1;
    this.speed2 = 1;
    this.acceleration1 = 0.2;
    this.acceleration2 = 0.2;
    this.opacity1 = 255;
    this.transparency1 = 3.5;
    this.opacity2 = 255;
    this.transparency2 = 3.5;
    this.active = true;
    this.activePlayButton = false;
    // Timer
    this.timer = 0;
  }

  update(){
    if(this.active){
      this.timer++;
      this.move();
      this.fade();
      this.display();
    }
  }

  move(){
    // Move Downwards
    // Wait Timer
    if(this.timer > 0.4*60){
      // Left
      this.y1 = this.y1 + this.vy1;
      this.vy1 = this.speed1;
      this.speed1 = this.speed1 + this.acceleration1;
      if(this.y1 > 3*height/2){
        this.vy1 = 0;
        this.speed1 = 0;
        this.acceleration1 = 0;
      }
    }


    // Wait Timer
    if(this.timer > 0.8*60){
      // Right
      this.y2 = this.y2 + this.vy2;
      this.vy2 = this.speed2;
      this.speed2 = this.speed2 + this.acceleration2;
      if(this.y2 > 3*height/2){
        this.vy2 = 0;
        this.speed2 = 0;
        this.acceleration2 = 0;
      }
    }

    if(this.timer > 2.6*60){
      // Acitvate PLay Button
      this.activePlayButton = true;
    }


  }

  fade(){
    // Add Fading Effect
    // Wait Timer
    if(this.timer > 0.4*60){
      // Left
      this.opacity1 = this.opacity1 - this.transparency1;
      if(this.opacity1 <= 0){
        this.transparency1 =  0;
      }
  }

    // Wait Timer
    if(this.timer > 0.8*60){
      // Right
      this.opacity2 = this.opacity2 - this.transparency2;
      if(this.opacity2 <= 0){
        this.transparency2 =  0;
      }
    }
  }

  display(){

    push();

    // Left
    fill(254, 253, 249, this.opacity1);
    rect(this.x1, this.y1, this.width, this.height);

    // Right
    fill(254, 253, 249, this.opacity2);
    rect(this.x2, this.y2, this.width, this.height);

    pop();

  }

  reset(){
    // Reset Values/Animation
    this.x1 = width/4;
    this.y1 = height/3;
    this.x2 = 3*width/4;
    this.y2 = height/3;
    this.vx1 = 0;
    this.vy1 = 0;
    this.vx2 = 0;
    this.vy2 = 0;
    this.speed1 = 1;
    this.speed2 = 1;
    this.acceleration1 = 0.2;
    this.acceleration2 = 0.2;
    this.opacity1 = 255;
    this.transparency1 = 3.5;
    this.opacity2 = 255;
    this.transparency2 = 3.5;
    this.activePlayButton = false;
    this.update();
  }
}
