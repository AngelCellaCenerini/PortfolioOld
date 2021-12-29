class Homepage{
  constructor(x, y, x1, y1){
    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;
    this.width = 20;
    this.height = 440;
    this.width1 = 12;
    this.height1 = 400;
    this.growth = 2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;
    this.acceleration = 0.1;
    this.opacity = 0;
    this.transparency = 10;

  }

  update(){
    this.display();
    this.move();
    this.grow();
    this.reveal();
  }

  move(){

  }

  grow(){


  }

  reveal(){

  }

  display(){

    push();

    noFill();
    stroke(42, 42, 42);
    strokeWeight(13);
    // Central Square
    rect(this.x1, this.y1, 20*this.width, this.height);
    // Left Line
    rect(this.x1 - width/6 + 10, this.y1, this.width/2, this.height);
    // Right Line
    rect(this.x1 + width/6 - 10, this.y1 + this.height/4, this.width/2, this.height/2);

    pop();

  }
}
