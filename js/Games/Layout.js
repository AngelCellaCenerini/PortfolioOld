class Layout{
  constructor(x1, y1, x2, y2, x3, y3, scrollX, scrollX2, scrollY){

    // Images
    this.image1 = game1;
    this.image2 = game2;
    this.image3 = game3;
    this.imageX1 = x1;
    this.imageY1 = y1;
    this.imageX2 = x2;
    this.imageY2 = y2;
    this.imageX3 = x3;
    this.imageY3 = y3;
    this.imageWidth = 500;
    this.imageHeight = 375;
    this.first = false;
    this.second = false;
    this.third = false;
    // Text
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.name1 = `It Chooses`;
    this.name2 = `Bambi 2 | The Untold Sequel`;
    this.name3 = `Madeleine`;
    this.details1 = `
    HTML
    CSS
    Javascript

    p5.js

    JSON

    jQuery |
    jQuery UI`;
    this.details2 = `

    Bitsy`;
    this.details3 = `
    HTML
    CSS
    Javascript

    p5.js`;
    // Play Button
    this.buttonX1 = x1 + 2*this.imageWidth/3 - 15;
    this.buttonY1 = y1 + 210;
    this.buttonX2 = x2 + 2*this.imageWidth/3 - 15;
    this.buttonY2 = y2 + 210;
    this.buttonX3 = x3 + 2*this.imageWidth/3 - 15;
    this.buttonY3 = y3 + 210;
    this.interactive = true;
    // More Button
    this.plusButtonX1 = x1 - this.imageWidth/3;
    this.plusButtonY1 = y1 + this.imageHeight/2;
    this.plusButtonX2 = x2 - this.imageWidth/3;
    this.plusButtonY2 = y2 + this.imageHeight/2;
    this.plusButtonX3 = x3 - this.imageWidth/3;
    this.plusButtonY3 = y3 + this.imageHeight/2;
    this.plusButtonSize1 = 45;
    this.plusButtonSize2 = 45;
    this.plusButtonSize3 = 45;
    this.growth1 = 1;
    this.growth2 = 1;
    this.growth3 = 1;
    // Descriptions
    this.expanded1 = false;
    this.descriptionX1 = x1;
    this.descriptionY1 =  y1;
    this.expanded2 = false;
    this.descriptionX2 = x2;
    this.descriptionY2 =  y2;
    this.expanded3 = false;
    this.descriptionX3 = x3;
    this.descriptionY3 =  y3;
    this.descriptionOpacity = 220;
    this.description = undefined;
    this.description1 = `
    Regain your five senses.
    Face them.
    Choose.`;
    this.description2 = `
    Avenge Mother.`;
    this.description3 = `
    Solve puzzles to collect notes
    and scripts to unlock
    the melody that might
    explain everything.`;
    // Page
    this.firstPage = true;
    this.active = true;
    // Scrolling
    this.scrollX = scrollX;
    this.scrollActive = true;
    this.scrollX2 = scrollX2;
    this.scroll2Active = false;
    this.scrollY = scrollY;
    this.scrollWidth = 40;
    this.scrollHeight = 19;
  }

  update(animation){
    // Check if page is active
    if(this.active){
      this.addInfo();
    }
    this.display(animation);
    // Include Animation Effect
    animation.update();
    if(this.active){
      this.scroll(animation);
    }

  }

  addInfo(){
    // Hover over Plus Button
    // Check if displaying
    if(this.firstPage){
      // Button 1
      let d1 = dist(this.plusButtonX1, this.plusButtonY1, mouseX, mouseY);
      if ( d1 < this.plusButtonSize1/2){
        // Grow Button
        this.plusButtonSize1 = this.plusButtonSize1 + this.growth1;
        if(this.plusButtonSize1 > 55){
          this.growth1 = 0;
        }
        // Display Description
        this.expanded1 = true;
      }
      else{
        this.expanded1 = false;
        this.plusButtonSize1 = 45;
        this.growth1 = 1;
      }
      // Button 2
      let d2 = dist(this.plusButtonX2, this.plusButtonY2, mouseX, mouseY);
      if ( d2 < this.plusButtonSize2/2){
        this.plusButtonSize2 = this.plusButtonSize2 + this.growth2;
        if(this.plusButtonSize2 > 55){
          this.growth2 = 0;
        }
        // Display Description
        this.expanded2 = true;
      }
      else{
        this.expanded2 = false;
        this.plusButtonSize2 = 45;
        this.growth2 = 1;
      }
    }
    else{
      // Button 3
      let d3 = dist(this.plusButtonX3, this.plusButtonY3, mouseX, mouseY);
      if ( d3 < this.plusButtonSize3/2){
        this.plusButtonSize3 = this.plusButtonSize3 + this.growth3;
        if(this.plusButtonSize3 > 55){
          this.growth3 = 0;
        }
        // Display Description
        this.expanded3 = true;
      }
      else{
        this.expanded3 = false;
        this.plusButtonSize3 = 45;
        this.growth3 = 1;
      }
    }

  }

  scroll(animation){
    push();

    // Scroll among Works
      // Display
      // Yellow Text Box
      fill(42);
      rect(this.scrollX, this.scrollY, this.scrollWidth, this.scrollHeight);
      // Text
      fill(255);
      textSize(18);
      textAlign(CENTER, CENTER);
      text(`>`, this.scrollX, this.scrollY);
      // Display as Inactive - aka add semi transparent layer
      if(!this.scrollActive){
        fill(255, 190);
        rect(this.scrollX, this.scrollY, this.scrollWidth, this.scrollHeight);
      }


      // Interact
      // Scroll Right
      if((mouseX > this.scrollX - this.scrollWidth/2 &&
         mouseX < this.scrollX + this.scrollWidth/2 &&
         mouseY > this.scrollY - this.scrollHeight/2 &&
         mouseY < this.scrollY + this.scrollHeight/2) && (mouseIsPressed) && (this.scrollActive)){

             // Scroll Page
             if(this.scrollActive){
               this.firstPage = false;
               // this.scrolled = true;
               this.scrollActive = false;
               this.scroll2Active = true;
               // Reset Animation
               animation.reset();
               // animation.timer = 0;
               // this.activate(animation)
               // Reset Play Button
               // animation.activePlayButton = false;
             }

      }

      // Display
      // Yellow Text Box
      fill(42);
      rect(this.scrollX2, this.scrollY, this.scrollWidth, this.scrollHeight);
      // Text
      fill(255);
      textSize(18);
      textAlign(CENTER, CENTER);
      text(`<`, this.scrollX2, this.scrollY);

      // Display as Inactive - aka add semi transparent layer
      if(!this.scroll2Active){
        fill(255, 190);
        rect(this.scrollX2, this.scrollY, this.scrollWidth, this.scrollHeight);
      }

      // Scroll Left
      if((mouseX > this.scrollX2 - this.scrollWidth/2 &&
         mouseX < this.scrollX2 + this.scrollWidth/2 &&
         mouseY > this.scrollY - this.scrollHeight/2 &&
         mouseY < this.scrollY + this.scrollHeight/2) && (mouseIsPressed) && (this.scroll2Active)){

           // Scroll Page
           if(this.scroll2Active){
             // Change Page
             this.firstPage = true;
             this.scrollActive = true;
             this.scroll2Active = false;
             // Reset Animation
             animation.reset();
             // Reset Play Button
             animation.activePlayButton = true;
           }
    }

    pop();

  }


  display(animation){

    push();

    // Third Project
    if(!this.firstPage){
      // Image
      image(this.image3, this.imageX3, this.imageY3, this.imageWidth, this.imageHeight);
      // Text
      fill(42);
      // textFont(bigShoulderDisplayFont);
      textSize(30);
      textAlign(LEFT);
      // Names
      text(this.name3, this.x3 - this.imageWidth/2, this.y3 - this.imageHeight/2 - 30);
      // Black Text Box
      fill(42);
      rect(this.x3 + 2*this.imageWidth/3 - 15, this.y3, 120, this.imageHeight);
      // Details
      fill(254, 253, 249);
      textSize(16);
      text(this.details3, this.x3 + 2*this.imageWidth/3 - 100, this.y3 - 100);

      // Description 3
      if (this.expanded3){
        // Text Box
        fill(42, this.descriptionOpacity);
        rect(this.descriptionX3, this.descriptionY3, this.imageWidth, this.imageHeight);
        // Text
        fill(254, 253, 249);
        textAlign(LEFT);
        textSize(19);
        text(this.description3, this.descriptionX3 - this.imageWidth/2, this.descriptionY3);
      }

      // PLus Button
      fill(42);
      stroke(254, 253, 249);
      ellipse(this.plusButtonX3, this.plusButtonY3, this.plusButtonSize3);
      // PLus Button Text
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(20);
      text(`+`, this.plusButtonX3, this.plusButtonY3);
      noStroke();

      // Check if State features Play Button
      // Check Current Page
      // Check Animation Timer
      if ((this.interactive) && (!this.firstPage) && (!animation.activePlayButton)){

          // Play Button
          // Button 3
          document.getElementById("button3").style.visibility = `visible`;
          document.getElementById("button3").style.left = `${0 + this.buttonX3 - 60}px`;
          document.getElementById("button3").style.top = `${0 + this.buttonY3 - 15}px`;
          // Hide Other Buttons
          document.getElementById("button1").style.visibility = `hidden`;
          document.getElementById("button2").style.visibility = `hidden`;
      }
    }
    else{
      // Image
      image(this.image1, this.imageX1, this.imageY1, this.imageWidth, this.imageHeight);
      image(this.image2, this.imageX2, this.imageY2, this.imageWidth, this.imageHeight);

      // Text
      fill(42);
      textSize(30);
      textAlign(LEFT);
      // Names
      text(this.name1, this.x1 - this.imageWidth/2, this.y1 - this.imageHeight/2 - 30);
      text(this.name2, this.x2 - this.imageWidth/2, this.y2 - this.imageHeight/2 - 30);
      // Black Text Box
      fill(42);
      rect(this.x1 + 2*this.imageWidth/3 - 15, this.y1, 120, this.imageHeight);
      rect(this.x2 + 2*this.imageWidth/3 - 15, this.y2, 120, this.imageHeight);
      // Details
      fill(254, 253, 249);
      textSize(16);
      text(this.details1, this.x1 + 2*this.imageWidth/3 - 100, this.y1 - 100);
      text(this.details2, this.x2 + 2*this.imageWidth/3 - 100, this.y2 - 100);

      // Check if State features Play Button
      // Check Current Page
      // Check Animation Timer
      if ((this.interactive) && (this.firstPage) && (animation.activePlayButton)){

          // Play Button
          // Button 1
          document.getElementById("button1").style.visibility = `visible`;
          document.getElementById("button1").style.left = `${0 + this.buttonX1 - 60}px`;
          document.getElementById("button1").style.top = `${0 + this.buttonY1 - 15}px`;
          // Button 2
          document.getElementById("button2").style.visibility = `visible`;
          document.getElementById("button2").style.left = `${0 + this.buttonX2 - 60}px`;
          document.getElementById("button2").style.top = `${0 + this.buttonY2 - 15}px`;
          // Hide Other Button
          document.getElementById("button3").style.visibility = `hidden`;

      }


      // Description 1
      if (this.expanded1){
        // Text Box
        fill(42, this.descriptionOpacity);
        rect(this.descriptionX1, this.descriptionY1, this.imageWidth, this.imageHeight);
        // Text
        fill(254, 253, 249);
        textAlign(LEFT);
        textSize(19);
        text(this.description1, this.descriptionX1 - this.imageWidth/2, this.descriptionY1);
      }
      if(this.expanded2){
        // Description 2
        // Text Box
        fill(42, this.descriptionOpacity);
        rect(this.descriptionX2, this.descriptionY2, this.imageWidth, this.imageHeight);
        // Text
        fill(254, 253, 249);
        textAlign(LEFT);
        textSize(19);
        text(this.description2, this.descriptionX2 - this.imageWidth/2, this.descriptionY2);
      }

      // PLus Button
      fill(42);
      stroke(254, 253, 249);
      ellipse(this.plusButtonX1, this.plusButtonY1, this.plusButtonSize1);
      ellipse(this.plusButtonX2, this.plusButtonY2, this.plusButtonSize2);
      // PLus Button Text
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(20);
      text(`+`, this.plusButtonX1, this.plusButtonY1);
      text(`+`, this.plusButtonX2, this.plusButtonY2);
      noStroke();
    }


    pop();

  }
}
