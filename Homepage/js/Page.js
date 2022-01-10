class Page{
  constructor(x, y, imageX, imageY, arrowX, arrowY, arrowX1, arrowY1){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;
    this.acceleration = 0.15;
    this.title = undefined;
    this.subhead = undefined;
    this.name1 = undefined;
    this.name2 = undefined;
    this.name3 = undefined;
    this.description1 = undefined;
    this.description2 = undefined;
    this.description3 = undefined;
    this.details1 = undefined;
    this.details2 = undefined;
    this.details3 = undefined;
    this.width = 220;
    this.height = 500;
    // Images
    this.image1 = undefined;
    this.image2 = undefined;
    this.image3 = undefined;
    this.imageX = imageX + 420;
    this.imageY = imageY - 140;
    this.imageX1 = imageX - 170;
    this.imageY1 = imageY + 120;
    this.imageX2 = imageX + 420;
    this.imageY2 = imageY + 70;
    this.imageWidth = 270;
    this.imageHeight = 190;
    this.tint = 0;
    this.tint1 = 0;
    this.tint2 = 0;
    this.delay = 0;
    this.opacity = 0;
    this.transparency = 40;
    // Selected Thumbnail
    this.first = false;
    this.second = false;
    this.third = false;

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
    // Click/interact with Page
    this.active = true;
    // For GitHub
    this.textBoxX = x - 320;
    this.textBoxY = y - 150;
    this.boxWidth = 180;
    this.boxHeight = 25;

  }
  update(slideshow, playButton){
    this.setState();
    this.reveal();
    this.move();
    if(this.active){
      this.enlarge(slideshow, playButton);     // Pics
      this.hoverButton();          // Plus Button
      this.expand();               // Additional Info on Projects
    }
    this.display();

  }

  setState(){
    // Assign Text and Images based on current State/Page
    if(state === `games`){
      // Games
      // Images Thumbnails
      this.image1 = gamesSheepImg;
      this.image2 = gamesSheepImg;
      this.image3 = gamesSheepImg;
      // Text
      this.title = `GAMES & Coding.`;
      this.subhead = `Source Code | GitHub`;
      // Text Box
      push();
      fill(42, 0);
      rect(this.textBoxX, this.textBoxY, this.boxWidth, this.boxHeight);
      // Click Box
      if (
      mouseX > this.textBoxX - this.boxWidth/2 &&
      mouseX < this.textBoxX + this.boxWidth/2 &&
      mouseY > this.textBoxY - this.boxHeight/2 &&
      mouseY < this.textBoxY + this.boxHeight/2 && mouseIsPressed === true) {
         // Open GitHub Window
         if(mouseIsPressed){
           window.open('https://github.com/AngelCellaCenerini');
         }
       }
      pop();
      // Top Right
      this.name1 = `JURASSIC PARK
      MOMENT`;
      // Left
      this.name2 = `IT CHOOSES`;
      // Bottom Right
      this.name3 = `MADELEINE`;
      this.description1 = `
      Live your own Jurassic Park Moment.
      Set webpage zoom to 80% and
      then refresh page before starting.`;
      this.description2 = `Face them. Regain your five senses.
      Choose.`;
      this.description3 = `
      Solve puzzles to collect notes and scripts
      to unlock the melody that might
      explain everything.`;
      this.details1 = `Javascript | HTML | CSS
      p5.js Library,
      ResponsiveVoice.js, JSON`;
      this.details2 = `
      Javascript | HTML | CSS
      p5.js Library, JSON &
      jQuery | jQuery UI`;
      this.details3 = `
      Javascript | HTML | CSS
      p5.js Library `;

    }
    else if(state === `webDesign`){
      // Web Design
      // Images Thumbnails
      this.image1 = hybrid1;
      this.image2 = webDesignSheepImg;
      this.image3 = gamesSheepImg;
      // Text
      this.title = `WEB Designs.`;
      this.subhead = `Coded & Built`;
      // Top Right
      this.name1 = `WEB GAME HYBRID`;
      // Left
      this.name2 = `CP3 WEBSITE`;
      // Bottom Right
      this.name3 = `PORTFOLIO`;
      this.description1 = `
      Conventional website layout
      featuring game mechanincs.
      Set page zoom to 80% and refresh.`;
      this.description2 = `Dynamic and easy to navigate, CP3's new website embodies
      the passionate commitment of its members by thoroughly
      showcasing its mission and projects.`;
      this.description3 = `
      Portfolio Website.
      Hope you're enjoying it.`;
      this.details1 = `Built via Code
      Javascript | HTML | CSS`;
      this.details2 = `
      Built via SquareSpace
      Original Graphics`;
      this.details3 = `
        Built via Code
        Javascript | HTML | CSS`;
    }
    else if(state === `3D`){
      // 3D
      // Images Thumbnails
      this.image1 = diorama1;
      this.image2 = kitbash1;
      this.image3 = sculpt4;
      // Text
      this.title = `3D Projects.`;
      this.subhead = `Ambience & Characters`;
      // Top Right
      this.name1 = `LOW POLY DIORAMA`;
      // Left
      this.name2 = `SCULPTED MODEL`;
      // Bottom Right
      this.name3 = `KITBASH`;
      this.description1 = `
      Reverse concept of the window
      cleaner career, littered with
      domestic scenes.`;
      this.description2 = `Feathered humanoid character. Mythological creature
      interpretating the unfamous behaviour of the
      bird species of the cuckoo.`;
      this.description3 = `
      Biomechanical interpretation of
      hammerhead shark, built via
      hardsurface models and components.`;
      this.details1 = `Sculptued in Blender
      UV Coloring`;
      this.details2 = `
      Sculpted in Blender
      Texture Paint &
      Adobe Substance 3D Painter
      Unity`;
      this.details3 = `
      Sculpted in Blender
      Adobe Substance 3D Painter`;
    }
    else if(state === `graphicDesign`){
      // Design
      // Images Thumbnails
      this.image1 = logo1;
      this.image2 = post3;
      this.image3 = poster1;
      // Text
      this.title = `GRAPHIC designs.`;
      this.subhead = `Social Media Posts, Posters & Logos`;
      // Top Right
      this.name1 = `CP3 LOGO`;
      // Left
      this.name2 = `PROMOTIONAL EARRINGS POSTER`;
      // Bottom Right
      this.name3 = `POSTS`;
      this.description1 = `
      Concordia Precious Plastic Project
      (CP3)'s redesigned logo conveys
      an immediate understanding of
      the initiative's mission.`;
      this.description2 = `Designed to promote earrings made out of HDPE recycled plastic
      by the CP3 initiative within the Concordia University campus. `;
      this.description3 = `
      Collection of selected designs branding
      and promoting CP3's events and projects.`;
      this.details1 = `Adobe Illustrator`;
      this.details2 = `
      Adobe Illustrator
      & Canva`;
      this.details3 = `
      Canva`;
    }
    else if(state === `photography`){
      // Photgraphy
      // Images Thumbnails
      this.image1 = dq1;
      this.image2 = photographySheepImg;
      this.image3 = adam11;
      // Text
      this.title = `PHOTOGRAPY Experiments.`;
      this.subhead = `Exploring techical and expressive routes`;
      // Top Right
      this.name1 = `PHOT_1`;
      // Left
      this.name2 = `PHOT_2`;
      // Bottom Right
      this.name3 = `PHOT_3`;
      this.description1 = `
      Emphasized constrasts & colors
      to reinterpretate a mundane ambience.`;
      this.description2 = `Quiet moments simultaneously captured.`;
      this.description3 = `
      In-progress.`;
      this.details1 = ``;
      this.details2 = `
      `;
      this.details3 = `
      `;
    }
    else if(state === `art`){
      // Art
      // Images Thumbnails
      this.image1 = ambience2;
      this.image2 = character2;
      this.image3 = anatomy2;
      // Text
      this.title = `JUST SOME Art.`;
      this.subhead = `Personal Side Projects`;
      // Top Right
      this.name1 = `AMBIENCE STUDY`;
      // Left
      this.name2 = `ANATOMICAL STUDY`;
      // Bottom Right
      this.name3 = `CHARACTER STUDY`;
      this.description1 = `
      Eerie yet saturated scenario.`;
      this.description2 = `Studying anatomy and expressiveness
      of parts of the body.`;
      this.description3 = `
      Exploring a character's
      aesthetics and narrative.`;
      this.details1 = `Digital`;
      this.details2 = `
      Digital`;
      this.details3 = `
      Digital`;
    }
    else if(state === `editing`){
      // Edits
      // Images Thumbnails
      this.image1 = editingSheepImg;
      this.image2 = editingSheepImg;
      this.image3 = editingSheepImg;
      // Text
      this.title = `VIDEO Edits.`;
      this.subhead = `Personal & Promotional Projects`;
      // Top Right
      this.name1 = `COMP_1`;
      // Left
      this.name2 = `COMP_2`;
      // Bottom Right
      this.name3 = `COMP_3`;
      this.description1 = `
      In-progress.`;
      this.description2 = `In-progress.`;
      this.description3 = `
      In-progress.`;
      this.details1 = `Adobe After Effects`;
      this.details2 = `
      Adobe Premier Pro`;
      this.details3 = `
      Adobe After Effects`;
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

  }

  reveal(){
    this.delay++;
    // Buttons Opacity
    if (this.delay > 1.4*60){
      this.opacity = this.opacity + this.transparency;
      if (this.opacity >= 255){
        this.transparency = 0;
      }
    }
    // Images Tints
    if (this.delay > 0.5*60 && this.delay < 0.8*60){
      this.tint = random(0, 255);
    }
    else if (this.delay > 0.8*60){
      this.tint = 0;
    }
    if (this.delay > 0.3*60 && this.delay < 1*60){
      this.tint1 = random(0, 255);
    }
    else if (this.delay > 1*60){
      this.tint1 = 0;
    }
    if (this.delay > 0.2*60 && this.delay < 0.5*60){
      this.tint2 = random(0, 255);
    }
    else if (this.delay > 0.5*60){
      this.tint2 = 0;
    }

  }

  enlarge(slideshow, playButton){
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
            // Disable Interactivity with current page - elements won't change when hovered over
            this.active = false;
            // Assign Images to Thumnails
            // First
            if(dImage < this.imageWidth/3){
              this.first = true;
            }
            else{
              this.first = false;
            }
            //Second
            if(dImage1 < this.imageWidth/3){
              this.second = true;
            }
            else{
              this.second = false;
            }
            // Third
            if(mouseX > this.imageX1 - this.imageWidth/3 &&
               mouseX < this.imageX1 + this.imageWidth/3 &&
               mouseY > this.imageY1 - this.imageHeight/3 &&
               mouseY < this.imageY1 + this.imageHeight/3){
              this.third = true;
            }
            else{
              this.third = false;
            }

            // Open Slideshow
            slideshow.active = true;
            playButton.active = false;

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

    // X Icons
    // Left
    // image(xIcon, this.x - 405, this.y - this.height/13 + 5, 22, 22);
    // Right Bottom
    image(xIcon, this.x + 2*this.width + 120, this.y + this.height/2 - 11, 22, 22);
    // Right Top
    image(xIcon, this.x + 2*this.width + 120, this.y + this.height/2 - 75, 22, 22);

    // Images
    // Thumbnails
    // Tint
    // tint(255, 255);
    // Right Top
    image( this.image1, this.imageX, this.imageY, this.imageWidth - 80, this.imageWidth - 80);
    fill(254, 253, 249, this.tint);
    rect(this.imageX1, this.imageY1, width, 3*height/2);
    rect( this.imageX, this.imageY, this.imageWidth - 80, this.imageWidth - 80);
    // Right Bottom
    image( this.image2, this.imageX2, this.imageY2, this.imageWidth - 80, this.imageWidth - 80);
    fill(42, this.tint1);
    rect( this.imageX2, this.imageY2, this.imageWidth - 80, this.imageWidth - 80);
    // Left
    image( this.image3, this.imageX1, this.imageY1, this.imageWidth + 120, this.imageHeight + 30);
    fill(254, 253, 249, this.tint2);
    rect(this.imageX1, this.imageY1, width, 3*height/2);
    fill(253, 221, 107, this.tint2);
    rect(this.x + this.width/5, this.y + 2*this.height/3, 3*this.width/2, 3*this.height/2);

    // Text
    // Title Page
    fill(42);
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
    text(this.name1, this.x + 490, this.y - 250);

    // Projects Details (Non-expanded)
    textSize(17);
    // P1
    // Top Right
    fill(255);
    textAlign(RIGHT);
    text(this.details1, this.x + 320, this.y - 70);
    // Bottom Right
    fill(42);
    textAlign(LEFT);
    text(this.details3, this.x + 320, this.y + 220);
    // Left
    text(this.details2, this.x - 100, this.y + 100);

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
      text(this.description2, this.x - 2*this.width, this.y + this.height/3 - 10);
    }
    // Right Top
    if (this.expanded1){
      textSize(18);
      textFont(bigShoulderDisplayLighterFont);
      textAlign(LEFT);
      text(this.description1, this.x + 2*this.width + 30, this.y - this.height/5 - 20);
    }
    // Right Bottom
    if (this.expanded2){
      textSize(18);
      textFont(bigShoulderDisplayLighterFont);
      textAlign(LEFT);
      text(this.description3, this.x + 2*this.width + 10, this.y + this.height/9);
    }

    pop();

  }
}