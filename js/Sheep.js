class Sheep{
  constructor(x, y, image, image1, text, additionalAmountY, fontSize, delay, delay1){
    this.x = x;
    this.y = y;
    this.additionalAmountY = additionalAmountY;
    this.fontSize = fontSize;
    this.width = 140;
    this.height = 140;
    this.image = image;
    this.hoverAnimation = image1;
    this.text = text;
    this.opacity = 0;
    this.transparency = 40;
    this.flashing = true;
    this.hovered = false;
    this.stallTime = 0;
    this.startTimer = 0;
    this.delay = delay;
    this.delay1 = delay1;
  }

  update(){
    this.startTimer++;
    if (this.startTimer > this.delay1*60){
      this.flash();
      this.interact();
      this.display();
    }
  }

  flash(){
    // Stop Flashing
    this.stallTime++;
    if (this.stallTime > this.delay*60){
      this.flashing = false;
    }

  }

  interact(){
    // Hover - Activate Animation
    let d = dist(this.x, this.y, mouseX, mouseY);
    if ((d < this.width/2) && (d < this.height/2)){
      this.hovered = true;
      // Click - Change State
    }
    else{
      this.hovered = false;
    }

  }

  display(){

    // Check if User is hovering over
    if (this.hovered){
      image(this.hoverAnimation, this.x, this.y, this.width, this.height);
    }
    else{
      // Display Image
      image(this.image, this.x, this.y, this.width, this.height);
    }

    // Text
    push();
    textFont(bigShoulderDisplayFont);
    textSize(this.fontSize);
    fill(253, 221, 107);
    text(this.text, this.x, this.y + this.additionalAmountY);

    if (this.flashing){
      // Flashing
      fill(254, 253, 249, random(0, 255));
      rect(this.x, this.y, this.width);
      pop();

      let flash = random(0, 1);
      if (flash < 0.99){
        // Flashing
        this.opacity = 0;
      }
      else{
        this.opacity = 255;
      }
      fill(254, 253, 249, this.opacity);
      rect(this.x, this.y, this.width);
    }



  }
}
