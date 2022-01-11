class Slideshow{
  constructor(x, y, iconX, iconY){
    this.x = x;
    this.y = y;
    this.iconX = iconX;
    this.iconY = iconY;
    this.arrowX = x + width/2 - 100;
    this.arrowY = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 7;
    this.acceleration = 0.2;
    this.iconSize = 50;
    this.images = undefined;
    this.currentImage = 0;
    this.currentIndex = 0;
    this.opacity = 0;
    this.transparency = 10;
    this.active = false;
  }

  update(layout){
    // Only Active after User "zooms in" pics
    if (this.active){
      this.assignImg(layout);
      this.move();
      this.darken();
      this.close(layout);
      this.display();

    }
  }

  assignImg(layout){

      // Check which Thumnail Image was Selected
      // Display Relevant Images
      if(layout.first){
        this.images = [shark1, shark2, shark3];
      }
      else if(layout.second){
        this.images = [shark1, shark2, shark3];
      }
      else if(layout.third){
        this.images = [shark1, shark2, shark3];
      }

      // Assign Image
      this.currentImage = this.images[this.currentIndex];
  }

  move(){

    // Slide 'X' Button Downwards
    this.iconY = this.iconY + this.vy;
    this.vy = this.speed;
    this.speed = this.speed - this.acceleration;
    if(this.iconY >= height/7){
      // Stop
      this.speed = 0;
      this.acceleration = 0;
    }

  }

  darken(){
    // Gradually Darken Background
    this.opacity = this.opacity + this.transparency;
    if (this.opacity >= 220){
      this.transparency = 0;
    }
  }

  close(layout){
    // Close Slideshow if User presses 'X' Icon
    let d = dist(this.iconX, this.iconY, mouseX, mouseY);
    if( d < this.iconSize/2 && mouseIsPressed === true){
      // Close Slideshow
      this.active = false;
      this.currentIndex = 0;
      // Reactivate Page
      layout.active = true;
      // Reset Values
      this.opacity = 0;
      this.transparency = 10;
      this.iconY = -20;
      this.vy = 0;
      this.speed = 7;
      this.acceleration = 0.2;
    }
  }

  display(){

    push();

    // Darkened Background
    fill(42, this.opacity);
    rect(this.x, this.y, width, height);
    // Images
    image(this.currentImage, this.x, this.y);
    // Slideshow Icons
    // 'X' Icon
    fill(253, 221, 107, this.opacity);
    ellipse(this.iconX, this.iconY, this.iconSize);
    fill(42);
    textFont(`Courier`);
    textSize(25);
    textAlign(CENTER, CENTER);
    text('X', this.iconX, this.iconY);

    // Arrow Icon
    fill(253, 221, 107, 0);
    textSize(50);
    rect(this.arrowX, this.arrowY, this.iconSize);
    fill(254, 253, 249, this.opacity);
    textFont(`Courier`);
    text(`>`, this.arrowX, this.arrowY);

    pop();

  }
}
