class Page{
  constructor(x, y, title, subhead, name1, name2, imageX, imageY, imageWidth, imageHeight){
    this.x = x;
    this.y = y;
    this.title = title;
    this.subhead = subhead;
    this.name1 = name1;
    this.name2 = name2;
    this.width = 270;
    this.height = 530;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;
    this.acceleration = 0.1;
    this.imageX = imageX;
    this.imageY = imageY;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;

  }
  update(){
    this.enlarge();
    this.expand();
    this.display();

  }

  enlarge(){
    // Zoom in/Enlarge Images
  }

  expand(){
    // Display more Infortmation on Project by expanding lateral window
  }

  display(){

    push();

    // Background Blocks
    // Yellow
    fill(253, 221, 107);
    rect(this.x + this.width/5, this.y + 2*this.height/3, 3*this.width/2, 3*this.height/2);
    rect(this.x + this.width/5, this.y + 2*this.height, 3*this.width/2, 3*this.height/2);
    // Black(〜)
    fill(42, 42, 42);
    rect(this.x + this.width, this.y, this.width, this.height);
    // Title Page
    textFont(bigShoulderDisplayFont);
    textSize(55);
    textAlign(LEFT);
    text(this.title, this.x - 400, this.y - 180);
    // Subhead
    textSize(25);
    text(this.subhead, this.x - 400, this.y - 120);
    // Project 1 Title
    text(this.name1, this.x + 470, this.y - 255);
    // Project 2 Title
    text(this.name2, this.x - 400, this.y + 280);

    // X Icons
    // Left
    image(xIcon, this.x - 390, this.y + this.height/2 + 60, 22, 22);
    // Right Bottom
    image(xIcon, this.x + 2*this.width, this.y + this.height/2 - 11, 22, 22);
    // Right Top
    image(xIcon, this.x + 2*this.width, this.y + this.height/2 - 75, 22, 22);

    // Images
    fill(200, 200, 200, 100);
    rect(this.imageX + this.imageWidth + 80, this.imageY - 20, this.imageWidth, this.imageHeight);
    rect(this.imageX - this.imageWidth, this.imageY + 140, 3*this.imageWidth/2, this.imageHeight);

    // Projects Details (Non-expanded)
    // Projects Details (Expanded)

    pop();

  }
}
