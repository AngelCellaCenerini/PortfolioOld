class NavigationBar {
  constructor(x, y, text, chosenState){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 30;
    this.text = text;
    this.chosenState = chosenState;

  }
  update(){
    if (burgerMenu.extended){
      this.changeState();
      this.display();
    }
  }

  changeState(){
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
           }
      }
  }

  display(){

    push();

    // Text Box (Transparent)
    fill(42, 42, 42, 100);
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
