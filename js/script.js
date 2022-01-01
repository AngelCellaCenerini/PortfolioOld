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

// States - LogoScreen, Homepage, Games, Graphic Design, Web Design, Video Editing, 3D, Photography
let state = `homepage`;

/**
Description of preload
*/
function preload() {

  // Fonts
  bigShoulderDisplayFont = loadFont('assets/fonts/BigShouldersDisplay-SemiBold.otf');
  bigShoulderDisplayLighterFont = loadFont('assets/fonts/BigShouldersDisplay-Regular.otf');

  // Graphics
  // Logo
  logoImage = loadImage('assets/images/LogoButton.png');

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
  x = width/2;
  y = height/3 - height/20;
  webDesignSheep = new Sheep(x, y, webDesignSheepImg, webDesignSheepAni, `WEB DESIGN`, 15, 27, random(0.5, 1), random(0.7, 1.2));
  // Second Row
  x = width/2 - width/10;
  y = height/2;
  triDSheep = new Sheep(x, y, triDSheepImg, triDSheepAni, `3D`, -5, 27, random(0.5, 1), random(0.7, 1.2));
  x = width/2;
  y = height/2;
  graphicDesignSheep = new Sheep(x, y, graphicDesignSheepImg, graphicDesignSheepAni, `DESIGN`, -5, 27, random(0.5, 1), random(0.7, 1.2));
  // Third Row
  x = width/2 + width/10;
  y = 2*height/3 + height/20;
  editingSheep = new Sheep(x, y, editingSheepImg, editingSheepAni, `EDITS`, -10, 27, random(0.5, 1), random(0.7, 1.2));
  x = width/2;
  y = 2*height/3 + height/20;
  artSheep = new Sheep(x, y, artSheepImg, artSheepAni, `ART`, -10, 27, random(0.5, 1), random(0.7, 1.2));
  x = width/2 - width/10;
  y = 2*height/3 + height/20;
  photographySheep = new Sheep(x, y, photographySheepImg, photographySheepAni, `PHOTOGRAPHY`, -10, 24, random(0.5, 1), random(0.7, 1.2));

  // Burger Menu
  x = width/25;
  y = height/10;
  x1 = width/10;
  y1 = height/4 + 40;
  let tX1 = width/20;
  let tY1 = height/7;
  burgerMenu = new BurgerMenu(x, y, x1, y1, tX1, tY1);

  // Navigation Bar
  // Games
  x = width/16;
  y = height/7;
  navigationBarGames = new NavigationBar(x, y, `Games`, `games`);

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

    // Burger Menu
    burgerMenu.update();
    // Mavigation Bar
    navigationBarGames.update();

  }
  else if(state === `games`){


    push();
    fill(0, 0 , 255);
    rect(width/2, height/2, 500);
    pop();

  }
  else if(state === `graphicDesign`){

  }
  else if(state === `webDesign`){

  }
  else if(state === `webDesign`){

  }
  else if(state === `3D`){

  }
  else if(state === `editing`){

  }
  else if(state === `photography`){

  }

}

function mousePressed() {
  logoButton.update();
  burgerMenu.update();
  navigationBarGames.update();
}
