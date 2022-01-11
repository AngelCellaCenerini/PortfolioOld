class Layout{
  constructor(x1, y1, x2, y2, x3, y3){

    // Images
    this.image1 = shark1;
    this.image2 = shark2;
    this.image3 = shark3;
    this.imageX1 = x1;
    this.imageY1 = y1;
    this.imageX2 = x2;
    this.imageY2 = y2;
    this.imageX3 = x3;
    this.imageY3 = y3;
    this.imageWidth = 500;
    this.imageHeight = 375;
    // Text
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.name1 = `Sculpted Model`;
    this.name2 = `Low Poly Diorama`;
    this.name3 = `HardSurface & Kitbash`;
    this.details1 = `
    Blender

    Texture
    Paint

    Substance
    3D Painter`;
    this.details2 = `
    Blender

    UV
    Coloring `;
    this.details3 = `
    Blender
    Substance 3D Painter`;
    // Play Button
    this.buttonX1 = x1 + 2*this.imageWidth/3 - 15;
    this.buttonY1 = y1 + 210;
    this.buttonX2 = x2 + 2*this.imageWidth/3 - 15;
    this.buttonY2 = y2 + 210;
    this.buttonX3 = x3 + 2*this.imageWidth/3 - 15;
    this.buttonY3 = y3 + 210;
    this.buttonWidth = 120;
    this.buttonHeight = 30;
    this.text = `PLAY`;
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
    this.descriptionOpacity = 200;
    this.transparencyOpacity = 10;
    this.description = undefined;
    this.description1 = `
    Feathered humanoid character.
    Mythological creature interpretating
    the unfamous behaviour of
    the cuckoo bird species.`;
    this.description2 = `
    Reverse concept of the window
    cleaner career, littered
    with domestic (twisted) scenes.`;
    this.description3 = `
    Biomechanical interpretation of hammerhead shark built
    via hardsurface tools and components.`;
    // Page
    this.firstPage = true;
  }

  update(){
    this.addInfo();
    this.display();
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

  display(){

    push();

      // // Description
      // textFont(`Courier`);
      // textAlign(CENTER);
      // textSize(18);
      // let descriptionX = width/2;
      // let descriptionY = 4*height/5;
      // text(this.description, descriptionX, descriptionY);

    // }

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
      text(this.name3, this.x3 - this.imageWidth/2, this.y3 - 2*this.imageHeight/3);
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
      fill(253, 221, 107);
      ellipse(this.plusButtonX3, this.plusButtonY3, this.plusButtonSize3);
      // PLus Button Text
      fill(42);
      textAlign(CENTER);false
      textSize(20);
      text(`+`, this.plusButtonX3, this.plusButtonY3 - 2);

      // Check if State features Play Button
      if (this.interactive){
        // Play Button
        fill(253, 221, 107);
        rect(this.buttonX3, this.buttonY3, this.buttonWidth, this.buttonHeight);
        // Play Button Text
        fill(42);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(this.text, this.buttonX3, this.buttonY3);
      }

    }
    else{
      // Image
      image(this.image1, this.imageX1, this.imageY1, this.imageWidth, this.imageHeight);
      image(this.image2, this.imageX2, this.imageY2, this.imageWidth, this.imageHeight);

      // Text
      fill(42);
      // textFont(bigShoulderDisplayFont);
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
      if (this.interactive){
        // Play Button
        fill(253, 221, 107);
        rect(this.buttonX1, this.buttonY1, this.buttonWidth, this.buttonHeight);
        rect(this.buttonX2, this.buttonY2, this.buttonWidth, this.buttonHeight);
        // Play Button Text
        fill(42);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(this.text, this.buttonX1, this.buttonY1);
        text(this.text, this.buttonX2, this.buttonY2);
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
      fill(253, 221, 107);
      ellipse(this.plusButtonX1, this.plusButtonY1, this.plusButtonSize1);
      ellipse(this.plusButtonX2, this.plusButtonY2, this.plusButtonSize2);
      // PLus Button Text
      fill(42);
      textAlign(CENTER);
      textSize(20);
      text(`+`, this.plusButtonX1, this.plusButtonY1 - 2);
      text(`+`, this.plusButtonX2, this.plusButtonY2 - 2);
    }


    pop();

  }
}
