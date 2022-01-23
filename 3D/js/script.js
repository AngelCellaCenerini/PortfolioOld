"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

// Page Layout
let layout = undefined;
// Slideshow
let slideshow = undefined;
// Animation Effect
let animation = undefined;

// Images
let shark1 = undefined;
let shark2 = undefined;
let shark3 = undefined;
let diorama1 = undefined;
let diorama2 = undefined;
let diorama3 = undefined;
let diorama4 = undefined;
let diorama5 = undefined;
let sculpt1 = undefined;
let sculpt2 = undefined;
let sculpt3 = undefined;

/**
Description of preload
*/
function preload() {

  // Upload Images
  shark1 = loadImage('assets/images/shark1.png');
  shark2 = loadImage('assets/images/shark2.png');
  shark3 = loadImage('assets/images/shark4.png');
  diorama1 = loadImage('assets/images/diorama1.png');
  diorama2 = loadImage('assets/images/diorama2.png');
  diorama3 = loadImage('assets/images/diorama3.png');
  diorama4 = loadImage('assets/images/diorama4.png');
  diorama5 = loadImage('assets/images/diorama5.png');
  sculpt1 = loadImage('assets/images/sculpt1.png');
  sculpt2 = loadImage('assets/images/sculpt2.png');
  sculpt3 = loadImage('assets/images/sculpt3.png');

}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  // General Settings
  noStroke();
  textFont(`Courier`);
  // textStyle(BOLD);
  rectMode(CENTER);
  imageMode(CENTER);

  // Layout
  let x1 = width/4 - 50;
  let y1 = height/2 - 50;
  let x2 = 3*width/4 - 80;
  let y2 = height/2 - 50;
  let x3 = width/4 - 50;
  let y3 = height/2 - 50;
  let scrollX = 4*width/5 + 40;
  let scrollX2 = 4*width/5 - 25;
  let scrollY = 44*height/50 + 10;
  layout = new Layout(x1, y1, x2, y2, x3, y3, scrollX, scrollX2, scrollY);

  // Slideshow(s)
  let x = width/2;
  let y = height/2;
  let iconX = width/12;
  let iconY = -20;
  slideshow = new Slideshow(x, y, iconX, iconY);

  // Animation Effect
  x1 = width/4;
  y1 = height/3;
  x2 = 3*width/4;
  y2 = height/3;
  let animationWidth = width/2;
  let animationHeight = height;
  animation = new Animation(x1, y1, x2, y2, animationWidth, animationHeight);
}


/**
Description of draw()
*/
function draw() {

  // Background Color
  background(254, 253, 249);

  // Display Page
  layout.update(slideshow, animation);

  // Slideshow
  slideshow.update(layout);

  // Manage Navigation Menu
  let navigationMenu = document.getElementById('navigation-menu');
  let linkedInIcon = document.getElementById('linkedIn');
  if(slideshow.active){
    navigationMenu.style.visibility = `hidden`;
    linkedInIcon.style.visibility = `hidden`;
    // Hide Other Buttons
    document.getElementById("button1").style.visibility = `hidden`;
    document.getElementById("button2").style.visibility = `hidden`;
    document.getElementById("button3").style.visibility = `hidden`;

  }
  else{
    navigationMenu.style.visibility = `visible`;
    linkedInIcon.style.visibility = `visible`;
  }

  // Animation Effect
  // animation.update();

}

// p5 Events
function mousePressed() {
  // Slideshow
  slideshow.update(layout);
  slide();

}

function slide(){
    // Slide along Images
    let d = dist(slideshow.arrowX, slideshow.arrowY, mouseX, mouseY);
    if ( d < slideshow.iconSize/2 && mouseIsPressed === true){
      slideshow.currentIndex ++;
      if (slideshow.currentIndex >= slideshow.images.length){
        slideshow.currentIndex = 0;
      }
  }
}
