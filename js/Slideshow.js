class Slideshow{
  constructor(x, y, iconX, iconY){
    this.x = x;
    this.y = y;
    this.iconX = iconX;
    this.iconY = iconY;
    this.arrowX = x + width/2 - 100;
    this.arrowY = y + 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 7;
    this.acceleration = 0.2;
    this.iconSize = 40;
    this.images = undefined;
    this.currentImage = 0;
    this.currentIndex = 0;
    this.opacity = 0;
    this.transparency = 10;
    this.active = false;
  }

  update(page, playButton){
    // Only Active after User "zooms in" pics
    if (this.active){
      this.assignImg(page);
      this.move();
      this.darken();
      this.close(page, playButton);
      this.display();
    }
  }

  assignImg(page){
    // Establish State
    // Games
    if(state === `games`){
      // Check which Thumnail Image was Selected
      // Display Relevant Images
      if(page.first){
        this.images = [gamesSheepImg, graphicDesignSheepImg, webDesignSheepImg];
      }
      else if(page.second){
        this.images = [triDSheepImg, graphicDesignSheepImg, triDSheepImg];
      }
      else if(page.third){
        this.images = [photographySheepImg, editingSheepImg, webDesignSheepImg];
      }
    }

    // Web Design
    if(state === `webDesign`){
      // Check which Thumnail Image was Selected
      // Display Relevant Images
      if(page.first){
        this.images = [hybrid2, hybrid3];
      }
      else if(page.second){
        this.images = [triDSheepImg, graphicDesignSheepImg, triDSheepImg];
      }
      else if(page.third){
        this.images = [artSheepImg, editingSheepImg, photographySheepImg];
      }
    }

    // 3D
    if(state === `3D`){
      // Check which Thumnail Image was Selected
      // Display Relevant Images
      if(page.first){
        this.images = [diorama2, diorama3, diorama4, diorama5, diorama6, diorama7];
      }
      else if(page.second){
        this.images = [kitbash2, kitbash3, kitbash4];
      }
      else if(page.third){
        this.images = [sculpt1, sculpt2, sculpt3];
      }
    }

    // Design
    if(state === `graphicDesign`){
      // Check which Thumnail Image was Selected
      // Display Relevant Images
      if(page.first){
        this.images = [logo2, logo3];
      }
      else if(page.second){
        this.images = [post1, post2, post3, post4];
      }
      else if(page.third){
        this.images = [poster2];
      }
    }

    // Photography
    if(state === `photography`){
      // Check which Thumnail Image was Selected
      // Display Relevant Images
      if(page.first){
        this.images = [dq2, dq3, dq4, dq5];
      }
      else if(page.second){
        this.images = [triDSheepImg, graphicDesignSheepImg, triDSheepImg];
      }
      else if(page.third){
        this.images = [adam1, adam2, adam3, adam4, adam5, adam6, adam7, adam8, adam9, adam10];
      }
    }

    // Art
    if(state === `art`){
      // Check which Thumnail Image was Selected
      // Display Relevant Images
      if(page.first){
        this.images = [ambience1];
      }
      else if(page.second){
        this.images = [character1];
      }
      else if(page.third){
        this.images = [anatomy1];
      }
    }

    // Editing
    if(state === `editing`){
      // Check which Thumnail Image was Selected
      // Display Relevant Images
      if(page.first){
        this.images = [gamesSheepImg, graphicDesignSheepImg, webDesignSheepImg];
      }
      else if(page.second){
        this.images = [triDSheepImg, graphicDesignSheepImg, triDSheepImg];
      }
      else if(page.third){
        this.images = [photographySheepImg, editingSheepImg, webDesignSheepImg];
      }
    }

    this.currentImage = this.images[this.currentIndex];
  }

  move(){

    // Slide 'X' Button Downwards
    this.iconY = this.iconY + this.vy;
    this.vy = this.speed;
    this.speed = this.speed - this.acceleration;
    if(this.iconY >= height/7){
      // Stop
      this.speed = 0;
      this.acceleration = 0;
    }

  }

  darken(){
    // Gradually Darken Background
    this.opacity = this.opacity + this.transparency;
    if (this.opacity >= 200){
      this.transparency = 0;
    }
  }

  close(page, playButton){
    // Close Slideshow if User presses 'X' Icon
    let d = dist(this.iconX, this.iconY, mouseX, mouseY);
    if( d < this.iconSize/2 && mouseIsPressed === true){
      // Close Slideshow
      this.active = false;
      this.currentIndex = 0;
      // Reactivate Page
      page.active = true;
      playButton.active  = true;
      // Reset Values
      this.opacity = 0;
      this.transparency = 10;
      this.iconY = -20;
      this.vy = 0;
      this.speed = 7;
      this.acceleration = 0.2;
    }
  }

  display(){

    push();

    // Darkened Background
    fill(42, this.opacity);
    rect(this.x, this.y, width, height);
    // Images
    image(this.currentImage, this.x, this.y);
    // Slideshow Icons
    // 'X' Icon
    fill(253, 221, 107, this.opacity);
    ellipse(this.iconX, this.iconY, this.iconSize);
    image(xIconThick, this.iconX, this.iconY, 18, 18);
    // Arrow Icon
    fill(253, 221, 107, 0);
    textSize(50);
    rect(this.arrowX, this.arrowY, this.iconSize);
    fill(254, 253, 249, this.opacity);
    textFont(`Courier`);
    text(`>`, this.arrowX, this.arrowY);

    pop();

  }
}
