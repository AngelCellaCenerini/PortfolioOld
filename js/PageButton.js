class PageButton{
  constructor(x, y, x1, y1){
    this.x1 = x;
    this.y1 = y + 45;
    this.x2 = x1;
    this.y2 = y1 + 45;
    this.x3 = x1 - 190;
    this.y3 = y1 + 345;
    this.text = `🞂`;
    this.link1 = undefined;
    this.link2 = undefined;
    this.link3 = undefined;
    this.size = 30;
    this.size1 = 30;
    this.size2 = 30;
    this.delay = 0;
    this.opacity = 0;
    this.transparency = 15;
    this.growth = 1;
    this.growth1 = 1;
    this.growth2 = 1;
    this.active = true;
    this.first = true;
    this.second = true;
    this.third = true;
  }

  update(){
    this.reveal();
    if (this.active){
      this.expand();
      this.setPage();
      this.openProject();
    }
    this.display();
  }

  reveal(){
    this.delay++;
    // Buttons Opacity
    if (this.delay > 1.8*60){
      this.opacity = this.opacity + this.transparency;
      if (this.opacity >= 255){
        this.transparency = 0;
      }
    }
  }

  expand(){
    // Button 1
    let d = dist(this.x1, this.y1, mouseX, mouseY);
    if(d < this.size/2){
      // Change Cursor
      cursor('pointer');
      // Expand Button
      this.size = this.size + this.growth;
      if (this.size >= 35){
         this.growth = 0;
      }

      // Click and Open Project
      if(mouseIsPressed){
        window.open(this.link1);
      }
    }
    else{
      this.size = 30;
      this.growth = 1;
    }
    // B2
    let d1 = dist(this.x2, this.y2, mouseX, mouseY);
    if(d1 < this.size1/2){
      // Change Cursor
      cursor('pointer');
      // Expand Button
      this.size1 = this.size1 + this.growth1;
      if (this.size1 >= 35){
         this.growth1 = 0;
      }

      // Click and Open Project
      if(mouseIsPressed){
        window.open(this.link2);
      }
    }
    else{
      this.size1 = 30;
      this.growth1 = 1;
    }
    // B3
    let d2 = dist(this.x3, this.y3, mouseX, mouseY);
    if(d2 < this.size2/2){
      // Change Cursor
      cursor('pointer');
      // Expand Button
      this.size2 = this.size2 + this.growth2;
      if (this.size2 >= 35){
         this.growth2 = 0;
      }

      // Click and Open Project
      if(mouseIsPressed){
        window.open(this.link3);
      }
    }
    else{
      this.size2 = 30;
      this.growth2 = 1;
    }
  }

  setPage(){
    // Check Page
    if(state === `games`){
      // Activate Relevant Buttons
      this.first = true;
      this.second = true;
      this.third = true;
      // Set Links
      this.link1 = 'https://angelcellacenerini.github.io/CART263/Projects/Project02/Project02_Prototype/';
      this.link2 = 'https://angelcellacenerini.github.io/CART263/Projects/Project01/';
      this.link3 = 'https://angelcellacenerini.github.io/CART253/Projects/Project02/FinalProject02/';
    }
    else if(state === `webDesign`){
      // Activate Relevant Buttons
      this.first = true;
      this.second = true;
      this.third = false;
      // Set Links
      this.link1 = 'https://www.cp3montreal.com/';
      this.link2 = 'https://hybrid.concordia.ca/A_CENERI/FinalWeb/prototype/';
      this.link3 = '';
    }
    else if(state === `3D`){
      // Activate Relevant Buttons
      this.first = true;
      this.second = true;
      this.third = false;
      // Set Links
      this.link1 = '';
      this.link2 = '';
      this.link3 = '';
    }
    else if(state === `editing`){
      // Activate Relevant Buttons
      this.first = false;
      this.second = false;
      this.third = false;
      // Set Links
      this.link1 = '';
      this.link2 = '';
      this.link3 = '';
    }
  }

  openProject(){

  }

  display(){

    push();

    if(this.first){
      // Text Box
      fill(253, 221, 107, this.opacity);
      rect(this.x1, this.y1, this.size);
      // Text
      fill(42, this.opacity);
      textAlign(CENTER);
      text(this.text, this.x1, this.y1);
    }

    if(this.second){
      // Text Box
      fill(253, 221, 107, this.opacity);
      rect(this.x2, this.y2, this.size1);
      // Text
      fill(42, this.opacity);
      textAlign(CENTER);
      text(this.text, this.x2, this.y2);
    }

    if(this.third){
      // Text Box
      fill(253, 221, 107, this.opacity);
      rect(this.x3, this.y3, this.size2);
      // Text
      fill(42, this.opacity);
      textAlign(CENTER);
      text(this.text, this.x3, this.y3);
    }

    pop();

  }
}
