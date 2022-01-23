class Homepage{
  constructor(x, y, x1, y1){
    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x1;
    this.y2 = y1;
    this.width = 20;
    this.height = 510;
    this.width1 = 12;
    this.height1 = 400;
    this.vx = 0;
    this.vy = 0;
    this.vy1 = 0;
    this.vy2 = 0;
    this.speed = 3;
    this.acceleration = 0.08;
    this.speed1 = 6;
    this.acceleration1 = 0.1;
    this.speed2 = 3;
    this.acceleration2 = 0.09;
    this.opacity = 0;
    this.transparency = 10;
    this.stallingTime = 0 ;

  }

  update(){
    this.stallingTime++;
    if (this.stallingTime > 0.3*60){
      this.display();
      this.move();
    }
  }

  move(){

    // Center Square
    // Move
    this.y = this.y + this.vy;
    this.y1 = this.y1 + this.vy2;
    this.vy = this.speed;
    this.vy2 = this.speed2;
    // Decelerate
    this.speed = this.speed - this.acceleration;
    this.speed2 = this.speed2 - this.acceleration2;
    // Stop
    if (this.y >= (height/2)){
      this.speed = 0;
      this.acceleration = 0;
    }
    if (this.y1 >= (height/2)){
      this.speed2 = 0;
      this.acceleration2 = 0;
    }

    // this.stallingTime++;
    // if (this.stallingTime > 0.3*60){
      this.slide();
    // }

  }

  slide(){

        // Uncover Effect
        // Move
        this.y2 = this.y2 + this.vy1;
        this.vy1 = this.speed1;
        // Decelerate
        this.speed1 = this.speed1 - this.acceleration1;
        // Stop
        if (this.y2 <= -3*width/6){
          this.speed1 = 0;
          this.acceleration1 = 0;

        }
  }

  reveal(){

    this.opacity = this.opacity + this.transparency;
    if (this.opacity >= 255){
      this.transparency = 0;
    }

  }

  display(){

    push();

    noFill();
    stroke(42, 42, 42);
    strokeWeight(13);
    // Left Line
    rect(this.x1 - width/6 - 40, this.y1, this.width/2, this.height);
    // Right Line
    rect(this.x1 + width/6 + 40, this.y1 + this.height/4, this.width/2, this.height/2);
    // Uncover Effect
    noStroke();
    fill(254, 253, 249);
    rect(this.x2 - width/4, this.y2, 600);
    rect(this.x2 + width/4, this.y2 - height/4, 600);
    noFill();
    stroke(42, 42, 42);
    // Central Square
    rect(this.x, this.y, 25*this.width, this.height);

    pop();

  }
}
