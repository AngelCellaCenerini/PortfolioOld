class Slideshow{
  constructor(x, y, iconX, iconY){
    this.x = x;
    this.y = y;
    this.iconX = iconX;
    this.iconY = iconY;
    this.arrowX = x + width/2 - 100;
    this.arrowY = y + 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 7;
    this.acceleration = 0.2;
    this.iconSize = 40;
    this.images = undefined;
    this.currentImage = 0;
    this.currentIndex = 0;
    this.opacity = 0;
    this.transparency = 10;
    this.active = false;
  }

  update(page){
    // Only Active after User "zooms in" pics
    if (this.active){
      this.assignImg();
      this.move();
      this.darken();
      this.close(page);
      this.display();
    }
  }

  assignImg(){
    this.images = [gamesSheepImg, graphicDesignSheepImg, webDesignSheepImg];
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
    if (this.opacity >= 200){
      this.transparency = 0;
    }
  }

  close(page){
    // Close Slideshow if User presses 'X' Icon
    let d = dist(this.iconX, this.iconY, mouseX, mouseY);
    if( d < this.iconSize/2 && mouseIsPressed === true){
      // Close Slideshow
      this.active = false;
      this.currentIndex = 0;
      // Reactivate Page
      page.active = true;
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
    image(xIconThick, this.iconX, this.iconY, 18, 18);
    // Arrow Icon
    fill(253, 221, 107, 0);
    textSize(50);
    rect(this.arrowX, this.arrowY, this.iconSize);
    fill(254, 253, 249, this.opacity);
    text(`>`, this.arrowX, this.arrowY);

    pop();

  }
}
