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

// Images
let shark1 = undefined;
let shark2 = undefined;
let shark3 = undefined;
let shark4 = undefined;

/**
Description of preload
*/
function preload() {

  // Upload Images
  shark1 = loadImage('assets/images/shark1.png');
  shark2 = loadImage('assets/images/shark2.png');
  shark3 = loadImage('assets/images/shark4.png');

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
  let x1 = width/4 - 30;
  let y1 = height/2 - 50;
  let x2 = 3*width/4 - 80;
  let y2 = height/2 - 50;
  let x3 = width/4 - 30;
  let y3 = height/2 - 50;
  let scrollX = width;
  let scrollY = 7*height/8 + 10;
  layout = new Layout(x1, y1, x2, y2, x3, y3, scrollX, scrollY);

  // Slideshow(s)
  let x = width/2;
  let y = height/2;
  let iconX = width/12;
  let iconY = -20;
  slideshow = new Slideshow(x, y, iconX, iconY);
}


/**
Description of draw()
*/
function draw() {

  // Background Color
  background(254, 253, 249);

  // Display Page
  layout.update(slideshow);

  // Slideshow
  slideshow.update(layout);

  // Manage Navigation Menu
  let navigationMenu = document.getElementById('navigation-menu');
  let linkedInIcon = document.getElementById('linkedIn');
  if(slideshow.active){
    navigationMenu.style.visibility = `hidden`;
    linkedInIcon.style.visibility = `hidden`;
  }
  else{
    navigationMenu.style.visibility = `visible`;
    linkedInIcon.style.visibility = `visible`;
  }

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
