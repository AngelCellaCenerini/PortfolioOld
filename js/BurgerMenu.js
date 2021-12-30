class BurgerMenu {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.x1 = x;
    this.y1 = y;
    this.x2 = x;
    this.y2 = y;
    this.width = 15;
    this.height = 2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.acceleration = 0.07;
    this.hovered = false;
    this.extended = false;
  }

  update(){
    this.display();
    this.interact();
    this.move();
  }

  interact(){
    // Hover
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 4*this.height){
      this.hovered = true;
      this.extended = true;
    }

  }

  move(){
    if(this.hovered){
      // Move
      this.y1 = this.y1 + this.vy;
      this.vy = this.speed;
      // Decelerate
      this.speed = this.speed - this.acceleration;
      // Stop
      if (this.speed <= 0){
        this.speed = 0;
        this.acceleration = 0;
      }
    }

  }

  display(){
    push();
    // Burger Icon
    fill(42, 42, 42);
    rect(this.x, this.y, this.width, this.height);
    rect(this.x, this.y + 5, this.width, this.height);


    // Display Navigation Bar
    if(this.extended === true || this.hovered=== true ){
      rect(this.x2 - this.width/2, this.y2 + 6*this.width, this.height, 10*this.width);
      fill(254, 253, 249);
      rect(this.x1 - this.width/2, this.y1 + 6*this.width, 2*this.height, 11*this.width);

    }
    pop();

  }
}
