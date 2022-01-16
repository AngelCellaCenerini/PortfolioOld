"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/
// Homepage
let homepage = undefined;

/**
Preload Files
*/
function preload() {

  // Graphics
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
  textFont(`Monospace`);
  noStroke();

}

// States
function draw() {

    background(254, 253, 249);

    // Display
    push();
    fill(42);
    // Line
    rect(width/2, 2*height/3, 3*width/5, 1);
    // Text
    // Name
    textAlign(LEFT);
    textSize(20);
    text(`
    A   N   G      E   L
    C   E     L   L   A
    C   E   N   E   R      I   N   I`, width/20, height/6);
    // About
    textSize(13);
    text(`
    Computation Arts
    Concordia University`, 2*width/3, 2*height/3 - 50);
    pop();

}
