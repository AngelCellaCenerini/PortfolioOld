"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/
// Fonts
let bigShoulderDisplayFont = undefined;
let bigShoulderDisplayLighterFont = undefined;
// Graphics
// Logo
let logoButton = undefined;
let logoImage = undefined;
// X Icon
let xIcon = undefined;
let xIconThick = undefined;
// Email Icon
let email = undefined;
let emailIcon = undefined;

// Sheeps
//Icons
let gamesSheepImg = undefined;
let graphicDesignSheepImg = undefined;
let webDesignSheepImg = undefined;
let triDSheepImg = undefined;
let editingSheepImg = undefined;
let photographySheepImg = undefined;
let artSheepImg = undefined;
// Animations
let gamesSheepAni = undefined;
let graphicDesignSheepAni = undefined;
let webDesignSheepAni = undefined;
let triDSheepAni = undefined;
let editingSheepAni = undefined;
let photographySheepAni = undefined;
let artSheepAni = undefined;


// Uncover Effect
let uncoverEffect = undefined;
let introText = undefined;
// Homepage
let homepage = undefined;
// Sheeps
let sheeps = [];
let gamesSheep = undefined;
let graphicDesignSheep = undefined;
let webDesignSheep = undefined;
let triDSheep = undefined;
let editingSheep = undefined;
let photographySheep = undefined;
let artSheep = undefined;
// Burger Menu
let burgerMenu = undefined;
// Navigation Bar
let navigationBarHomepage = undefined;
let navigationBarGames = undefined;
let navigationBarWebDesign = undefined;
let navigationBar3D = undefined;
let navigationBarDesign = undefined;
let navigationBarPhotography = undefined;
let navigationBarArt = undefined;
let navigationBarEdits = undefined;

// Page(s)
let page = undefined;

// Slideshow(s)
let slideshow = undefined;

// States - LogoScreen, Homepage, Games, Graphic Design, Web Design, Video Editing, 3D, Photography
let state = `games`;

/**
Preload Files
*/
function preload() {

  // Fonts
  bigShoulderDisplayFont = loadFont('assets/fonts/BigShouldersDisplay-SemiBold.otf');
  bigShoulderDisplayLighterFont = loadFont('assets/fonts/BigShouldersDisplay-Regular.otf');

  // Graphics
  // Logo
  logoImage = loadImage('assets/images/LogoButton.png');
  // 'X' Icon
  xIcon = loadImage('assets/images/thickXIcon.png');
  xIconThick = loadImage('assets/images/XIconSmall.png');
  // Email Icon
  emailIcon = loadImage('assets/images/emailIcon.png');

  // Sheeps
  // Icons
  gamesSheepImg = loadImage('assets/images/games.png');
  graphicDesignSheepImg = loadImage('assets/images/design.png');
  webDesignSheepImg = loadImage('assets/images/webdesign.png');
  triDSheepImg = loadImage('assets/images/3d.png');
  editingSheepImg = loadImage('assets/images/editing.png');
  photographySheepImg = loadImage('assets/images/photography.png');
  artSheepImg = loadImage('assets/images/art.png');

  // Animations
  gamesSheepAni = loadImage('assets/images/LogoButton.png');
  graphicDesignSheepAni = loadImage('assets/images/LogoButton.png');
  webDesignSheepAni = loadImage('assets/images/LogoButton.png');
  triDSheepAni = loadImage('assets/images/LogoButton.png');
  editingSheepAni = loadImage('assets/images/LogoButton.png');
  photographySheepAni = loadImage('assets/images/LogoButton.png');
  artSheepAni = loadImage('assets/images/LogoButton.png');

}


/**
Description of setup
*/
function setup() {

  // Basic SetUp
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(`Courier`);
  noStroke();

  // Uncover Effect
  let x = width/2;
  let y = height/4;
  uncoverEffect = new UncoverEffect(x, y);

  // Intro Text
  x = width/2;
  y = height/2 + 70;
  introText = new IntroText(x, y);

  // Logo/Button
  x = width/2;
  y = height/2;
  logoButton = new Logo(x, y, logoImage);

  // Homepage
  x = width/2;
  y = height/2 - 50;
  let x1 = width/2;
  let y1 = height/2 - 50;
  homepage = new Homepage(x, y, x1, y1);

  // Sheeps
  // First Row
  x = width/2 - width/10;
  y = height/3 - height/20;
  gamesSheep = new Sheep(x, y, gamesSheepImg, gamesSheepAni, `GAMES`, 0, 27, random(0.5, 1), random(0.7, 1.2));
  sheeps.push(gamesSheep);
  x = width/2;
  y = height/3 - height/20;
  webDesignSheep = new Sheep(x, y, webDesignSheepImg, webDesignSheepAni, `WEB DESIGN`, 15, 27, random(0.5, 1), random(0.7, 1.2));
  sheeps.push(webDesignSheep);
  // Second Row
  x = width/2 - width/10;
  y = height/2;
  triDSheep = new Sheep(x, y, triDSheepImg, triDSheepAni, `3D`, -5, 27, random(0.5, 1), random(0.7, 1.2));
  sheeps.push(triDSheep);
  x = width/2;
  y = height/2;
  graphicDesignSheep = new Sheep(x, y, graphicDesignSheepImg, graphicDesignSheepAni, `DESIGN`, -5, 27, random(0.5, 1), random(0.7, 1.2));
  sheeps.push(graphicDesignSheep);
  // Third Row
  x = width/2 + width/10;
  y = 2*height/3 + height/20;
  editingSheep = new Sheep(x, y, editingSheepImg, editingSheepAni, `EDITS`, -10, 27, random(0.5, 1), random(0.7, 1.2));
  sheeps.push(editingSheep);
  x = width/2;
  y = 2*height/3 + height/20;
  artSheep = new Sheep(x, y, artSheepImg, artSheepAni, `ART`, -10, 27, random(0.5, 1), random(0.7, 1.2));
  sheeps.push(artSheep);
  x = width/2 - width/10;
  y = 2*height/3 + height/20;
  photographySheep = new Sheep(x, y, photographySheepImg, photographySheepAni, `PHOTOGRAPHY`, -10, 24, random(0.5, 1), random(0.7, 1.2));
  sheeps.push(photographySheep);

  // Burger Menu
  x = width/25;
  y = height/10;
  x1 = width/15;
  y1 = height/4 + 40;
  let tX1 = width/20;
  let tY1 = height/7;
  burgerMenu = new BurgerMenu(x, y, x1, y1, tX1, tY1);

  // Navigation Bar
  // Homepage
  x = width/16;
  y = height/7;
  navigationBarHomepage = new NavigationBar(x, y, `Homepage`, `homepage`);
  // Games
  x = width/16;
  y = height/7 + 35;
  navigationBarGames = new NavigationBar(x, y, `Games`, `games`);
  // Web Design
  x = width/16;
  y = height/7 + 70;
  navigationBarWebDesign = new NavigationBar(x, y, `Web Design`, `webDesign`);
  // 3D
  x = width/16;
  y = height/7 + 105;
  navigationBar3D = new NavigationBar(x, y, `3D`, `3D`);
  // Graphic Design
  x = width/16;
  y = height/7 + 140;
  navigationBarDesign = new NavigationBar(x, y, `Graphic Design`, `graphicDesign`);
  // Photography
  x = width/16;
  y = height/7 + 175;
  navigationBarPhotography = new NavigationBar(x, y, `Photography`, `photography`);
  // Art
  x = width/16;
  y = height/7 + 210;
  navigationBarArt = new NavigationBar(x, y, `Art`, `art`);
  // Editing
  x = width/16;
  y = height/7 + 245;
  navigationBarEdits = new NavigationBar(x, y, `Editing`, `editing`);

  // Page(s)
  x = width/2 + 50;
  y = height/2;
  let imageX = width/2;
  let imageY = height/2;
  let arrowX = width/4 + 15;
  let arrowY = 3*height/5 + 110;
  let arrowX1 = 5*width/6;
  let arrowY1 = height/5 + 20;
  page = new Page(x, y, imageX, imageY, arrowX, arrowY, arrowX1, arrowY1);


  // Slideshow(s)
  x = width/2;
  y = height/2;
  let iconX = width/12;
  let iconY = -20;
  slideshow = new Slideshow(x, y, iconX, iconY);

  // Email Icon
  x = width/20;
  y = 6*height/7;
  email = new Email(x, y, emailIcon);

}

// States
function draw() {

    background(254, 253, 249);

  // LogoScreen
  if(state === `logoScreen`){

    // Display Button
    // image(logoImage, width/2, height/2, 257, 223);
    logoButton.update(introText);

    // Uncover Effect
    uncoverEffect.update(logoButton);
    // Intro Text
    introText.update();


  }
  else if(state === `homepage`){

    // Homepage
    homepage.update();

    // Sheeps
    gamesSheep.update();
    graphicDesignSheep.update();
    webDesignSheep.update();
    triDSheep.update();
    editingSheep.update();
    photographySheep.update();
    artSheep.update();

    // Navigation Menu
    navigationMenu();

    // Email Icon
    email.update();

  }
  else if(state === `games`){

    // Page
    page.update(slideshow);
    // Navigation Menu
    navigationMenu();
    // Slideshow
    slideshow.update(page);
    // Email Icon
    email.update();
  }
  else if(state === `graphicDesign`){

    // Page
    page.update(slideshow);
    // Navigation Menu
    navigationMenu();
    // Slideshow
    slideshow.update(page);
  }
  else if(state === `webDesign`){

    // Page
    page.update(slideshow);
    // Navigation Menu
    navigationMenu();
    // Slideshow
    slideshow.update(page);
  }
  else if(state === `3D`){

    // Page
    page.update(slideshow);
    // Navigation Menu
    navigationMenu();
    // Slideshow
    slideshow.update(page);
  }
  else if(state === `photography`){

    // Page
    page.update(slideshow);
    // Navigation Menu
    navigationMenu();
    // Slideshow
    slideshow.update(page);
  }
  else if(state === `art`){

    // Page
    page.update(slideshow);
    // Navigation Menu
    navigationMenu();
    // Slideshow
    slideshow.update(page);
  }
  else if(state === `editing`){

    // Page
    page.update(slideshow);
    // Navigation Menu
    navigationMenu();
    // Slideshow
    slideshow.update(page);
  }

  // Include Email Button
  manageEmailButton();


}

// Functions
function navigationMenu(){
  // Burger Menu
  burgerMenu.update(slideshow);
  // Mavigation Bar
  navigationBarHomepage.update(burgerMenu, homepage, page);
  navigationBarGames.update(burgerMenu, homepage, page);
  navigationBarWebDesign.update(burgerMenu, homepage, page);
  navigationBar3D.update(burgerMenu, homepage, page);
  navigationBarDesign.update(burgerMenu, homepage, page);
  navigationBarPhotography.update(burgerMenu, homepage, page);
  navigationBarArt.update(burgerMenu, homepage, page);
  navigationBarEdits.update(burgerMenu, homepage, page);
}

function resetSheeps(){
  // Reset Sheep
  for (let i = 0; i < sheeps.length; i ++){
    let sheep = sheeps[i];
    sheep.opacity = 0;
    sheep.opacity = 0;
    sheep.flashing = true;
    sheep.stallTime = 0;
    sheep.startTimer = 0;
    sheep.transparency = 40;
    sheep.delay = random(0.5, 1);
    sheep.delay1 = random(0.7, 1.2);

}
}

// p5 Events
function mousePressed() {
  logoButton.update(introText);
  // Navigation Menu
  navigationMenu();
  // Slideshow
  slideshow.update(page);
  slide();

}

function slide(){
    // Slide along Images
    // if(state === `games`){
      let d = dist(slideshow.arrowX, slideshow.arrowY, mouseX, mouseY);
      if ( d < slideshow.iconSize/2 && mouseIsPressed === true){
        slideshow.currentIndex ++;
        if (slideshow.currentIndex >= slideshow.images.length){
          slideshow.currentIndex = 0;
        }
    }
  // }
}

function manageEmailButton(){
  if(state !== `logoScreen`){
    let emailButton = document.getElementById('email');
    emailButton.style.visibility = `visible`;
  }
}
