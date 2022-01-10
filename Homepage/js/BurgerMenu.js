class BurgerMenu {
  constructor(x, y, x1, y1, tX1, tY1){
    this.x = x;
    this.y = y;
    this.x1 = x;
    this.y1 = y;
    this.x2 = x;
    this.y2 = y;
    this.textBoxX = x1;
    this.textBoxY = y1;
    this.width = 15;
    this.height = 2;
    this.textBoxWidth = 160;
    this.textBoxHeight = 300;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.acceleration = 0.07;
    this.hovered = false;
    this.extended = false;
  }

  update(slideshow){
    this.display();
    if(!slideshow.active){
      // Check that Page is active
      this.interact();
    }
    this.move();
  }

  interact(){
    // Hover over Burger Icon
    if(mouseX > this.x - 3*this.width/2 &&
         mouseX < this.x + 3*this.width/2 &&
         mouseY > this.y - 3*this.height/2 &&
         mouseY < this.y + 3*this.height/2){
           // Rgister Status change
           this.hovered = true;
           this.extended = true;
         }
         else{
           if (!this.extended){
             this.hovered = false;
             // Reset Values
             this.speed = 5;
             this.acceleration = 0.07;
             this.y1 = this.y2;
         }
    }

    // Hover over Navigation Bar
    if(mouseX > this.textBoxX - this.textBoxWidth/2 &&
         mouseX < this.textBoxX + this.textBoxWidth/2 &&
         mouseY > this.textBoxY - this.textBoxHeight/2 &&
         mouseY < this.textBoxY + this.textBoxHeight/2){
           // keep on keeping on :)
         }
         else{
           this.extended = false;
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

    // Display Navigation Bar
    if(this.extended === true || this.hovered === true ){
        // Text Box
        fill(42, 42, 42, 0);
        rect(this.textBoxX, this.textBoxY, this.textBoxWidth, this.textBoxHeight);

      }
      // Black Line
      fill(42, 42, 42);
      rect(this.x2 - this.width/2, this.y2 + 6*this.width, this.height, 10*this.width);
      fill(254, 253, 249);
      // Uncover Effect
      rect(this.x1 - this.width/2, this.y1 + 6*this.width, 2*this.height, 11*this.width);

      // Burger Icon
      fill(42, 42, 42);
      rect(this.x, this.y, this.width, this.height);
      rect(this.x, this.y + 5, this.width, this.height);

    pop();

  }
}
