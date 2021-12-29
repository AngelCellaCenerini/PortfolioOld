class Logo{
  constructor(x, y, image){
    this.x = x;
    this.y = y;
    this.image = image;
    this.width = 204;
    this.height = 180;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2.5;
    this.acceleration = 0.08;
    this.growth = 0.8;
    this.maxWidth = 220;
    this.originalWidth = 204;
    this.originalHeight = 180;
    this.active = false;
    this.hovered = false;
  }

  update(introText){
    this.display();
    this.interact(introText);
    this.move();
    this.grow();
  }

  interact(introText){
    // Check if Active (aka Uncover Effect is over)
    if (this.active){
      // User hovers over Logo
      let d = dist(this.x, this.y, mouseX, mouseY);
      if (d < this.width/2){
        this.hovered = true;
        introText.active = true;
        // User clicks on logo
        if (mouseIsPressed){
          state = `homepage`;
        }
      }
      else{
        // Deactivate Status
        this.hovered = false;
        introText.active = false;
        // Reset Size and Position
        this.reset();
        introText.reset();
      }
    }
  }

  move(){
    if (this.hovered){
      // Move
      this.y = this.y - this.vy;
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

  grow(){
    if (this.hovered){
      this.width = this.width + this.growth;
      this.height = this.height + this.growth;
      if (this.width >= this.maxWidth){
        this.growth = 0;
      }
    }
  }

  reset(){
    // Reset Size
    this.width = this.originalWidth;
    this.height = this.originalHeight;
    // Reset Position
    this.x = width/2;
    this.y = height/2;
    // Reset Values
    this.speed = 2.5;
    this.acceleration = 0.08;
    this.growth = 0.8;

  }

  display(){
    image(this.image, this.x, this.y, this.width, this.height);
  }
}