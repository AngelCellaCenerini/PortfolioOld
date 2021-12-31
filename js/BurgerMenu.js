class BurgerMenu {
  constructor(x, y, x1, y1, tX1, tY1){
    this.x = x;
    this.y = y;
    this.x1 = x;
    this.y1 = y;
    this.x2 = x;
    this.y2 = y;
    this.textX1 = tX1;
    this.textY1 = tY1;
    this.textX2 = x1;
    this.textY2 = y1;
    this.textX3 = tX1;
    this.textY3 = tY1 + 60;
    this.textX4 = tX1;
    this.textY4 = tY1 + 90;
    this.textX5 = tX1;
    this.textY5 = tY1 + 120;
    this.textX6 = tX1;
    this.textY6 = tY1 + 150;
    this.textX7 = tX1;
    this.textY7 = tY1 + 180;
    this.textX8 = tX1;
    this.textY8 = tY1 + 210;
    this.textBoxX = x1;
    this.textBoxY = y1;
    this.width = 15;
    this.textBoxWidth = 180;
    this.textBoxHeight = 300;
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
    this.changeState();
    this.move();
  }

  interact(){
    // Hover over Burger Icon
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 4*this.height){
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
    let d1 =  dist(this.textBoxX, this.textBoxY, mouseX, mouseY);
    // if (((d1 < this.textBoxWidth/2) || (d1 < 150*this.height)) && (this.extended === true)){
      if ((d1 < this.textBoxWidth) && (this.extended === true)){
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

  changeState(){
    // if (this.extended){
      // Change State on User Input
      // Measure Mouse position in relation to text
      // let d2 = dist(this.textX1 + 10*this.width, this.textY1 + 3*this.width, mouseX, mouseY);
      // let d3 = dist(this.textX2, this.textY2, mouseX, mouseY);
      // let d4 = dist(this.textX3 + this.width, this.textY3 + 7*this.width, mouseX, mouseY);
      // let d5 = dist(this.textX4 + this.width, this.textY4 + 9*this.width, mouseX, mouseY);
      // let d6 = dist(this.textX5 + this.width, this.textY5 + 11*this.width, mouseX, mouseY);
      // let d7 = dist(this.textX6 + this.width, this.textY6 + 13*this.width, mouseX, mouseY);
      // let d8 = dist(this.textX7 + this.width, this.textY7 + 15*this.width, mouseX, mouseY);
      // let d9 = dist(this.textX8 + this.width, this.textY8 + 17*this.width, mouseX, mouseY);
      // Check Mouse Input
      // if(mouseIsPressed){
      //   // Homepage
      //   // if ((d2 < this.width) && (state !== `homepage`)){
      //   //   state = `homepage`;
      //   // }
      //   // Games
      //   if ((d3 < this.textBoxWidth/2) && (state !== `games`)){
      //     state = `games`;
      //   }
      // }

    // }



    // console.log(state);

  }

  display(){
    push();

    // Display Navigation Bar
    if(this.extended === true || this.hovered === true ){
        // Text Box
        fill(254, 253, 249);
        fill(42, 42, 42, 100);
        rect(this.textBoxX, this.textBoxY, this.textBoxWidth, this.textBoxHeight);
        // Text
        fill(42, 42, 42);
        textSize(21);
        // textLeading(30);
        textFont(bigShoulderDisplayLighterFont);
        textAlign(LEFT);
        // text(`
        //   Homepage
        //   Games
        //   Web Design
        //   3D
        //   Design
        //   Photography
        //   Art
        //   Edits`, this.textX - this.width, this.textY + 8*this.width);
        // text(`Homepage`, this.textX1, this.textY1);
        // text(`Games`, this.textX2, this.textY2, this.textBoxWidth, this.textBoxHeight);
        // text(`Web Design`, this.textX3, this.textY3);
        // text(`3D`, this.textX4, this.textY4);
        // text(`Design`, this.textX5, this.textY5);
        // text(`Photography`, this.textX6, this.textY6);
        // text(`Art`, this.textX7, this.textY7);
        // text(`Edits`, this.textX8, this.textY8);

      }
      // Black Line
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
