"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/
// Graphics
// Logo
let logoButton = undefined;
let logoImage = undefined;
// SheepsIcons
let gamesSheepImg = undefined;
let graphicDesignSheepImg = undefined;
let webDesignSheepImg = undefined;
let triDSheepImg = undefined;
let editingSheepImg = undefined;
let photographySheepImg = undefined;

// Uncover Effect
let uncoverEffect = undefined;
let introText = undefined;
// Homepage
let homepage = undefined;

// States - LogoScreen, Homepage, Games, Graphic Design, Web Design, Video Editing, 3D, Photography
let state = `homepage`;

/**
Description of preload
*/
function preload() {

  // Load PNGs Graphics
  logoImage = loadImage('assets/images/LogoButton.png');

  gamesSheepImg = loadImage('assets/images/LogoButton.png');
  graphicDesignSheepImg = loadImage('assets/images/LogoButton.png');
  webDesignSheepImg = loadImage('assets/images/LogoButton.png');
  triDSheepImg = loadImage('assets/images/LogoButton.png');
  editingSheepImg = loadImage('assets/images/LogoButton.png');
  photographySheepImg = loadImage('assets/images/LogoButton.png');


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
  let y1 = height/2;
  homepage = new Homepage(x, y, x1, y1);

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

  }
  else if(state === `games`){

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
}
