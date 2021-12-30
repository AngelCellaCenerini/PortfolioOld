class BurgerMenu {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.x1 = x;
    this.y1 = y;
    this.x2 = x;
    this.y2 = y;
    this.textX1 = x;
    this.textY1 = y;
    this.textX2 = x;
    this.textY2 = y;
    this.textX3 = x;
    this.textY3 = y;
    this.textX4 = x;
    this.textY4 = y;
    this.textX5 = x;
    this.textY5 = y;
    this.textX6 = x;
    this.textY6 = y;
    this.textX7 = x;
    this.textY7 = y;
    this.textX8 = x;
    this.textY8 = y;
    this.textBoxX = x;
    this.textBoxY = y;
    this.width = 15;
    this.textBoxWidth = 200;
    this.textBoxHeight = 400;
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
      if (((d1 < this.textBoxWidth/100) || (d1 < 3*this.textBoxHeight/4)) && (this.extended === true)){
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
    if (this.extended){
      // Change State on User Input
      // Measure Mouse position in relation to text
      let d2 = dist(this.textX1 + 10*this.width, this.textY1 + 3*this.width, mouseX, mouseY);
      let d3 = dist(this.textX2 + this.width, this.textY2 + 5*this.width, mouseX, mouseY);
      let d4 = dist(this.textX3 + this.width, this.textY3 + 7*this.width, mouseX, mouseY);
      let d5 = dist(this.textX4 + this.width, this.textY4 + 9*this.width, mouseX, mouseY);
      let d6 = dist(this.textX5 + this.width, this.textY5 + 11*this.width, mouseX, mouseY);
      let d7 = dist(this.textX6 + this.width, this.textY6 + 13*this.width, mouseX, mouseY);
      let d8 = dist(this.textX7 + this.width, this.textY7 + 15*this.width, mouseX, mouseY);
      let d9 = dist(this.textX8 + this.width, this.textY8 + 17*this.width, mouseX, mouseY);
      // Check Mouse Input
      if(mouseIsPressed){
        // Homepage
        if ((d2 < this.width) && (state !== `homepage`)){
          state = `homepage`;
        }
        // Games
        if ((d3 < 20) && (state !== `games`)){
          state = `games`;
        }
      }

    }



    console.log(state);

  }

  display(){
    push();

    // Display Navigation Bar
    if(this.extended === true || this.hovered === true ){
        // Text Box
        fill(254, 253, 249);
        rect(this.textBoxX, this.textBoxY, 20, this.textBoxHeight);
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
        text(`Homepage`, this.textX1 + this.width, this.textY1 + 3*this.width);
        text(`Games`, this.textX2 + this.width, this.textY2 + 5*this.width);
        text(`Web Design`, this.textX3 + this.width, this.textY3 + 7*this.width);
        text(`3D`, this.textX4 + this.width, this.textY4 + 9*this.width);
        text(`Design`, this.textX5 + this.width, this.textY5 + 11*this.width);
        text(`Photography`, this.textX6 + this.width, this.textY6 + 13*this.width);
        text(`Art`, this.textX7 + this.width, this.textY7 + 15*this.width);
        text(`Edits`, this.textX8 + this.width, this.textY8 + 17*this.width);

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
