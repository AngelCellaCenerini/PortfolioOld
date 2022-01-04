class NavigationBar {
  constructor(x, y, text, chosenState){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 30;
    this.text = text;
    this.chosenState = chosenState;

  }
  update(burgerMenu, homepage, page){
    if (burgerMenu.extended){
      this.changeState(homepage, page);
      this.display();

    }
  }

  changeState(homepage, page){
    // Check if mouse is located over text
    if(mouseX > this.x - this.width/2 &&
         mouseX < this.x + this.width/2 &&
         mouseY > this.y - this.height/2 &&
         mouseY < this.y + this.height/2){
           // Check if Mouse is Pressed
           // Check current state - avoid reloading same page
           if (mouseIsPressed && state !== this.chosenState){
             // Change State
             state = this.chosenState;
             // Reset Page(s) Values
             this.resetAll(homepage, page);
             resetSheeps();
           }
      }
  }

  resetAll(homepage, page){

    // Homepage
    // Reset Values
    homepage.stallingTime = 0;
    homepage.speed1 = 6;
    homepage.acceleration1 = 0.1;
    homepage.speed2 = 3;
    homepage.acceleration2 = 0.09;
    homepage.opacity = 0;
    homepage.transparency = 10;
    homepage.vx = 0;
    homepage.vy = 0;
    homepage.vy1 = 0;
    homepage.vy2 = 0;
    homepage.speed = 3;
    homepage.acceleration = 0.08;
    // Relocate
    homepage.x = width/2;
    homepage.y = height/2 - 50;
    homepage.x1 = width/2;
    homepage.y1 = height/2 - 50;
    homepage.x2 = width/2;
    homepage.y2 = height/2 - 50;

    // Page(s)
    // Reset Values
    page.vy = 0;
    page.speed = 3;
    page.acceleration = 0.15;
    page.tint = 0;
    page.tint1 = 0;
    page.tint2 = 0;
    page.delay = 0;
    page.opacity = 0;
    page.transparency = 40;
    // Relocate
    page.x = width/2 + 50;
    page.y = height/2;

  }

  display(){

    push();

    // Text Box (Transparent)
    fill(42, 42, 42, 0);
    rect(this.x, this.y, this.width, this.height);
    // Text
    fill(42, 42, 42);
    textSize(21);
    textFont(bigShoulderDisplayLighterFont);
    textAlign(LEFT);
    text(this.text, this.x - this.width/4, this.y);

    pop();

  }
}
