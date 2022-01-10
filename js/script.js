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
// Play Button
let playButton = undefined;

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

// Images
// Design //
let post1 = undefined;
let post2 = undefined;
let post3 = undefined;
let post4 = undefined;
let logo1 = undefined;
let logo2 = undefined;
let logo3 = undefined;
let poster1 = undefined;
let poster2 = undefined;
// 3D //
let kitbash1 = undefined;
let kitbash2 = undefined;
let kitbash3 = undefined;
let kitbash4 = undefined;
let diorama1 = undefined;
let diorama2 = undefined;
let diorama3 = undefined;
let diorama4 = undefined;
let diorama5 = undefined;
let diorama6 = undefined;
let diorama7 = undefined;
let sculpt1 = undefined;
let sculpt2 = undefined;
let sculpt3 = undefined;
let sculpt4 = undefined;
// ART
let anatomy1 = undefined;
let anatomy2 = undefined;
let ambience1 = undefined;
let ambience2 = undefined;
let character1 = undefined;
let character2 = undefined;
// Photgraphy
let adam1 = undefined;
let adam2 = undefined;
let adam3 = undefined;
let adam4 = undefined;
let adam5 = undefined;
let adam6 = undefined;
let adam7 = undefined;
let adam8 = undefined;
let adam9 = undefined;
let adam10 = undefined;
let adam11 = undefined;
let dq1 = undefined;
let dq2 = undefined;
let dq3 = undefined;
let dq4 = undefined;
let dq5 = undefined;
// Web Design
let hybrid1 = undefined;
let hybrid2 = undefined;
let hybrid3 = undefined;

// States - LogoScreen, Homepage, Games, Graphic Design, Web Design, Video Editing, 3D, Photography
let state = `3D`;

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
  xIconThick = loadImage('assets/images/xIconSmall.png');

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
  gamesSheepAni = loadImage('assets/images/gamesAn.gif');
  graphicDesignSheepAni = loadImage('assets/images/designAni.gif');
  webDesignSheepAni = loadImage('assets/images/webAni.gif');
  triDSheepAni = loadImage('assets/images/3dAni.gif');
  editingSheepAni = loadImage('assets/images/editingAni.gif');
  photographySheepAni = loadImage('assets/images/photAni.gif');
  artSheepAni = loadImage('assets/images/artAni.gif');

  // Images
  // Design
  // Posts
  post1 = loadImage('assets/images/design/des1.png');
  post2 = loadImage('assets/images/design/des2.png');
  post3 = loadImage('assets/images/design/des3.png');
  post4 = loadImage('assets/images/design/des4.png');
  // Logos
  logo1 = loadImage('assets/images/design/des5.png');
  logo2 = loadImage('assets/images/design/des6.png');
  logo3 = loadImage('assets/images/design/des7.png');
  // Poster
  poster1 = loadImage('assets/images/design/des9.png');
  poster2 = loadImage('assets/images/design/des8.png');
  // 3D
  // Kitbash
  kitbash1 = loadImage('assets/images/3d/3D_2.png');
  kitbash2 = loadImage('assets/images/3d/3D_1.png');
  kitbash3 = loadImage('assets/images/3d/3D_3.png');
  kitbash4 = loadImage('assets/images/3d/3D_4.png');
  diorama1 = loadImage('assets/images/3d/3D_5.png');
  diorama2 = loadImage('assets/images/3d/3D_6.png');
  diorama3 = loadImage('assets/images/3d/3D_7.png');
  diorama4 = loadImage('assets/images/3d/3D_8.png');
  diorama5 = loadImage('assets/images/3d/3D_9.png');
  diorama6 = loadImage('assets/images/3d/3D_10.png');
  diorama7 = loadImage('assets/images/3d/3D_11.png');
  sculpt1 = loadImage('assets/images/3d/3D_12.png');
  sculpt2 = loadImage('assets/images/3d/3D_13.png');
  sculpt3 = loadImage('assets/images/3d/3D_14.png');
  sculpt4 = loadImage('assets/images/3d/3D_15.png');
  // Art
  anatomy1 = loadImage('assets/images/art/art1.png');
  anatomy2 = loadImage('assets/images/art/art4.png');
  ambience1 = loadImage('assets/images/art/art2.png');
  ambience2 = loadImage('assets/images/art/art5.png');
  character1 = loadImage('assets/images/art/art3.png');
  character2 = loadImage('assets/images/art/art6.png');
  // Photgraphy
  adam1 = loadImage('assets/images/photography/phot1.png');
  adam2 = loadImage('assets/images/photography/phot2.png');
  adam3 = loadImage('assets/images/photography/phot3.png');
  adam4 = loadImage('assets/images/photography/phot4.png');
  adam5 = loadImage('assets/images/photography/phot5.png');
  adam6 = loadImage('assets/images/photography/phot6.png');
  adam7 = loadImage('assets/images/photography/phot7.png');
  adam8 = loadImage('assets/images/photography/phot8.png');
  adam9 = loadImage('assets/images/photography/phot9.png');
  adam10 = loadImage('assets/images/photography/phot10.png');
  adam11 = loadImage('assets/images/photography/phot11.png');
  dq1 = loadImage('assets/images/photography/phot12.png');
  dq2 = loadImage('assets/images/photography/phot13.png');
  dq3 = loadImage('assets/images/photography/phot14.png');
  dq4 = loadImage('assets/images/photography/phot15.png');
  dq5 = loadImage('assets/images/photography/phot16.png');
  // Web Design
  hybrid1 = loadImage('assets/images/web/web1.png');
  hybrid2 = loadImage('assets/images/web/web2.png');
  hybrid3 = loadImage('assets/images/web/web3.png');
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

  // Play Button
  // x = width/2 + 50;
  // y = height/2;
  x = width/4 + 15;
  y = 3*height/5 + 110;
  x1 = 5*width/6;
  y1 = height/5 + 20;
  playButton = new PageButton(x, y, x1, y1);

}

// States
function draw() {

    background(254, 253, 249);

    // Include Email Button
    manageEmailButton();

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

  }
  else if(state === `games`){

    // Page
    page.update(slideshow, playButton);
    // Navigation Menu
    navigationMenu();
    // Play Button
    playButton.update();
    // Slideshow
    slideshow.update(page, playButton);

  }
  else if(state === `graphicDesign`){

    // Page
    page.update(slideshow, playButton);
    // Navigation Menu
    navigationMenu();
    // Play Button
    playButton.update();
    // Slideshow
    slideshow.update(page, playButton);
  }
  else if(state === `webDesign`){

    // Page
    page.update(slideshow, playButton);
    // Navigation Menu
    navigationMenu();
    // Play Button
    playButton.update();
    // Slideshow
    slideshow.update(page, playButton);

  }
  else if(state === `3D`){

    // Page
    page.update(slideshow, playButton);
    // Navigation Menu
    navigationMenu();
    // Play Button
    playButton.update();
    // Slideshow
    slideshow.update(page, playButton);

  }
  else if(state === `photography`){

    // Page
    page.update(slideshow, playButton);
    // Navigation Menu
    navigationMenu();
    // Slideshow
    slideshow.update(page, playButton);
  }
  else if(state === `art`){

    // Page
    page.update(slideshow, playButton);
    // Navigation Menu
    navigationMenu();
    // Slideshow
    slideshow.update(page, playButton);
  }
  else if(state === `editing`){

    // Page
    page.update(slideshow, playButton);
    // Navigation Menu
    navigationMenu();
    // Play Button
    playButton.update();
    // Slideshow
    slideshow.update(page, playButton);

  }


}

// Functions
function navigationMenu(){
  // Burger Menu
  burgerMenu.update(slideshow);
  // Mavigation Bar
  navigationBarHomepage.update(burgerMenu, homepage, page, playButton);
  navigationBarGames.update(burgerMenu, homepage, page, playButton);
  navigationBarWebDesign.update(burgerMenu, homepage, page, playButton);
  navigationBar3D.update(burgerMenu, homepage, page, playButton);
  navigationBarDesign.update(burgerMenu, homepage, page, playButton);
  navigationBarPhotography.update(burgerMenu, homepage, page, playButton);
  navigationBarArt.update(burgerMenu, homepage, page, playButton);
  navigationBarEdits.update(burgerMenu, homepage, page, playButton);
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
  slideshow.update(page, playButton);
  slide();
  // Page
  page.setState();

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
  let linkedButton = document.getElementById('email');
  if(state !== `logoScreen`){
    linkedButton.style.visibility = `visible`;
  }
  if(slideshow.active){
    linkedButton.style.visibility = `hidden`;
  }
}
