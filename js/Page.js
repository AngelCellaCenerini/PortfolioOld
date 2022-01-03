class Page{
  constructor(x, y, title, subhead, name1, name2, name3, imageX, imageY, arrowX, arrowY, arrowX1, arrowY1){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;
    this.acceleration = 0.15;
    this.title = title;
    this.subhead = subhead;
    this.name1 = name1;
    this.name2 = name2;
    this.name3 = name3;
    this.width = 220;
    this.height = 500;
    // Images
    this.imageX = imageX + 420;
    this.imageY = imageY - 140;
    this.imageX1 = imageX - 170;
    this.imageY1 = imageY + 120;
    this.imageX2 = imageX + 420;
    this.imageY2 = imageY + 70;
    this.imageWidth = 270;
    this.imageHeight = 190;
    this.imageVy = 0;
    this.imageSpeed = 2;
    this.imageAcceleration = 0.08;
    this.tint = 0;
    this.delay = 0;
    this.opacity = 0;
    this.transparency = 40;

    // Arrows
    this.arrowX = arrowX;
    this.arrowY = arrowY;
    this.arrowX1 = arrowX1;
    this.arrowY1 = arrowY1;
    this.arrowX2 = arrowX1 - 190;
    this.arrowY2 = arrowY1 + 300;
    this.arrowArea = 35;
    this.arrowArea1 = 35;
    this.arrowArea2= 35;
    this.growth = 1;
    this.growth1 = 1;
    this.growth2 = 1;
    this.expanded = false;
    this.expanded1 = false;
    this.expanded2 = false;
    // Being Able to click/interact with page
    this.active = true;

  }
  update(slideshow){
    this.setState();
    this.reveal();
    this.move();
    if(this.active){
      this.enlarge(slideshow);     // Pics
      this.hoverButton();          // Plus Button
      this.expand();               // Additional Info on Projects
    }
    this.display();

  }

  setState(){
    // Assign Text and Images based on current State/Page
    if(state === `games`){
      // Games

    }
    else if(state === `webDesign`){
      // Web Design
    }
    else if(state === `3D`){
      // 3D
    }
    else if(state === `graphicDesign`){
      // Design
    }
    else if(state === `photography`){
      // Photgraphy
    }
    else if(state === `art`){
      // Art
    }
    else if(state === `editing`){
      // Edits
    }
  }

  move(){
    // Shift Layout Downwards
    this.y = this.y - this.vy;
    this.vy = this.speed;
    this.speed = this.speed - this.acceleration;
    // // Stop
    if (this.speed <= 0){
      this.speed = 0;
      this.acceleration = 0;
    }

    // Slight Delay
    // if (this.delay > 0.4*60){
    //   // Shift Images Downwards
    //   this.imageY = this.imageY + this.imageVy;
    //   this.imageVy = this.imageSpeed;
    //   this.imageSpeed = this.imageSpeed - this.imageAcceleration;
    //   // Stop
    //   if (this.imageSpeed <= 0){
    //     this.imageSpeed = 0;
    //     this.imageAcceleration = 0;
    //   }
    // }

  }

  reveal(){
    this.delay++;
    if (this.delay > 1*60){
      this.opacity = this.opacity + this.transparency;
      if (this.opacity >= 255){
        this.transparency = 0;
      }
    }
  }

  enlarge(slideshow){
    // Zoom in/Enlarge Images
    // Check if mouse is Hovering over Image
    // Image Top Right
    let dImage = dist(this.imageX, this.imageY, mouseX, mouseY);
    // Image Bottom Right
    let dImage1 = dist(this.imageX2, this.imageY2, mouseX, mouseY);
    if((dImage < this.imageWidth/3) || (dImage1 < this.imageWidth/3) || (mouseX > this.imageX1 - this.imageWidth/3 &&
         mouseX < this.imageX1 + this.imageWidth/3 &&
         mouseY > this.imageY1 - this.imageHeight/3 &&
         mouseY < this.imageY1 + this.imageHeight/3)){

          // Change Cursor
          cursor('zoom-in');
          // Check if Mouse is Pressed
          if(mouseIsPressed){
            // Restore Cursor
            cursor('auto');
            // Open Slideshow
            slideshow.active = true;
            // Disable Interactivity with current page - elements won't change when hovered over
            this.active = false;
          }
    }
    else{
      // Restore Cursor
      cursor('auto');
    }


  }

  hoverButton(){
    // Enlarge Plus Buttons when hovered
    // Button 1
    if(this.expanded){
      // Expand Button
      this.arrowArea = this.arrowArea + this.growth;
      if (this.arrowArea >= 45){
         this.growth = 0;
      }
    }
    // Button 2
    if(this.expanded1){
      // Expand Button
      this.arrowArea1 = this.arrowArea1 + this.growth1;
      if (this.arrowArea1 >= 45){
         this.growth1 = 0;
      }
    }
    // Button 3
    if(this.expanded2){
      // Expand Button
      this.arrowArea2 = this.arrowArea2 + this.growth2;
      if (this.arrowArea2 >= 45){
         this.growth2 = 0;
      }
    }
  }

  expand(){
    // Display more Infortmation on Project by expanding lateral window
    // Check if Mouse is Hovering over Arrow
    // Left Bottom Arrow Button
    let d = dist(this.arrowX, this.arrowY, mouseX, mouseY);
    if ( d < this.arrowArea/2){
      this.expanded = true;
    }
    else{
      this.expanded = false;
      this.arrowArea = 35;
      this.growth = 1;
    }
    // Right Top Arrow Button
    let d1 = dist(this.arrowX1, this.arrowY1, mouseX, mouseY);
    if ( d1 < this.arrowArea/2){
      this.expanded1 = true;
    }
    else{
      this.expanded1 = false;
      this.arrowArea1 = 35;
      this.growth1 = 1;
    }
    // Right Bottom Arrow Button
    let d2 = dist(this.arrowX2, this.arrowY2, mouseX, mouseY);
    if ( d2 < this.arrowArea/2){
      this.expanded2 = true;
    }
    else{
      this.expanded2 = false;
      this.arrowArea2 = 35;
      this.growth2 = 1;
    }
  }

  display(){

    push();

    // Background Blocks
    // Yellow
    fill(253, 221, 107);
    rect(this.x + this.width/5, this.y + 2*this.height/3, 3*this.width/2, 3*this.height/2);
    // Black(〜)
    fill(42, 42, 42);
    rect(this.x + this.width, this.y, this.width, this.height);
    // Title Page
    textFont(bigShoulderDisplayFont);
    textSize(55);
    textAlign(LEFT);
    text(this.title, this.x - 415, this.y - 180);
    // Subhead
    textSize(25);
    text(this.subhead, this.x - 415, this.y - 120);
    // Project 2 Title
    text(this.name2, this.x - 415, this.y + 310);
    // Project 3 Title
    fill(254, 253, 249);
    text(this.name3, this.x + this.width/2 + 30, this.y + 215);
    // Project 1 Title
    fill(42, 42, 42);
    textAlign(RIGHT);
    text(this.name1, this.x + 465, this.y - 245);

    // X Icons
    // Left
    // image(xIcon, this.x - 405, this.y - this.height/13 + 5, 22, 22);
    // Right Bottom
    image(xIcon, this.x + 2*this.width + 120, this.y + this.height/2 - 11, 22, 22);
    // Right Top
    image(xIcon, this.x + 2*this.width + 120, this.y + this.height/2 - 75, 22, 22);

    // Images
    // Thumbnails
    fill(200, 200, 200);
    // Right Top
    rect(this.imageX, this.imageY, this.imageWidth - 80);
    // Right Bottom
    rect(this.imageX2, this.imageY2, this.imageWidth - 80);
    // Left
    rect(this.imageX1, this.imageY1, this.imageWidth + 120, this.imageHeight + 30);

    // Projects Details (Non-expanded)
    // textFont(bigShoulderDisplayLighterFont);
    textSize(18);
    // P1
    // Top
    fill(255);
    textAlign(RIGHT);
    text(`Javascript | p5.js library
      Cacca`, this.x + 320, this.y - 70);
    // Bottom - Tentative P3
    fill(42);
    textAlign(LEFT);
    // P2
    text(`
      Javascript | p5.js
      Cacca`, this.x + 320, this.y + 220);

    text(`
      Javascript | p5.js
      Cacca`, this.x - 100, this.y + 100);

    // Projects Details (Expanded)
    // Yellow Buttons (Ellipse)
    fill(253, 221, 107, this.opacity);
    // Left Bottom
    ellipse(this.arrowX, this.arrowY, this.arrowArea);
    // Right Top
    ellipse(this.arrowX1, this.arrowY1, this.arrowArea1);
    // Right Bottom
    ellipse(this.arrowX2, this.arrowY2, this.arrowArea2);

    // Arrows
    fill(42, this.opacity);
    textSize(20);
    textFont(`Courier`);
    textAlign(CENTER);
    // Left Bottom
    text(`+`, this.arrowX, this.arrowY);
    // Right Top
    text(`+`, this.arrowX1, this.arrowY1);
    // Right Bottom
    text(`+`, this.arrowX2, this.arrowY2);
    // Expanded Text
    // Left Bottom
    if (this.expanded){
      textSize(18);
      textFont(bigShoulderDisplayLighterFont);
      textAlign(RIGHT);
      text(`Adventure game about dogs and cats fighting
        over affection. Not for the weak of heart.`, this.x - 2*this.width, this.y + this.height/3 - 10);
    }
    // Right Top
    if (this.expanded1){
      textSize(18);
      textFont(bigShoulderDisplayLighterFont);
      textAlign(LEFT);
      text(`
        Adventure game about dogs
        and cats fighting over affection.
        Not for the weak of heart.`, this.x + 2*this.width + 10, this.y - this.height/5 - 20);
    }
    // Right Bottom
    if (this.expanded2){
      textSize(18);
      textFont(bigShoulderDisplayLighterFont);
      textAlign(LEFT);
      text(`
        Adventure game about dogs
        and cats fighting over affection.
        Not for the weak of heart.`, this.x + 2*this.width + 10, this.y + this.height/9);
    }

    pop();

  }
}
