class NavigationBar {
  constructor(x, y, text, currentState, chosenState){
    this.x = x;
    this.y = y;
    this.width = 140;
    this.height = 35;
    this.text = text;
    this.currentState = currentState;
    this.chosenState = chosenState;

  }
  update(){
    this.changeState();
    this.display();
  }

  changeState(){

    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.width/2 && d < this.height/3){
      console.log(`here`);
      if(mouseIsPressed){
    console.log(`clicked`);
      }
      // if( && (this.chosenState !== this.currentState)){
        // state = this.chosenState;

      }
    // }

  }

  display(){
    // Text
    fill(42, 42, 42, 100);
    rect(this.x, this.y, this.width, this.height);
    textSize(21);
    textFont(bigShoulderDisplayLighterFont);
    textAlign(CENTER);
    text(this.text, this.x, this.y);
  }
}
