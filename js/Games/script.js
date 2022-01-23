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
// let slideshow = undefined;
// Animation Effect
let animation = undefined;

// Images
let game1 = undefined;
let game2 = undefined;
let game3 = undefined;

/**
Description of preload
*/
function preload() {

  // Upload Images
  game1 = loadImage('assets/images/Games/game1.png');
  game2 = loadImage('assets/images/Games/game2.gif');
  game3 = loadImage('assets/images/Games/game3.png');

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
  // let x = width/2;
  // let y = height/2;
  // let iconX = width/12;
  // let iconY = -20;
  // slideshow = new Slideshow(x, y, iconX, iconY);

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
  layout.update(animation);

}

// p5 Events
function mousePressed() {
  // layout.scroll();

}
