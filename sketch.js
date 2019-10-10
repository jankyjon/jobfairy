let im1;
let im2;
let im3;
let im4;
let im5;
let im6;  // images
let num // variable to swap images in click function


function preload() {
im1= loadImage('assets/1.png');
im2= loadImage('assets/2.png');
im3= loadImage('assets/3.png');
im4= loadImage('assets/4.png');
im5= loadImage('assets/5.png');
im6= loadImage('assets/6.png');



}

function setup() {
  // put setup code here
  createCanvas(375,812);
  background(100);

  image(im1,0,0);
  num = 0;
}

function draw() {
  // put drawing code here

if (mouseIsPressed) {




}
}


function  mouseClicked() {
  num = num+1;
  if (num ==1) {
      image(im2,0,0);
  }
  if (num ==2) {
      image(im3,0,0);
  }
  if (num ==3) {
      image(im4,0,0);
  }
  if (num ==4) {
      image(im5,0,0);
  }
  if (num ==5) {
      image(im6,0,0);
  }
  if (num ==6) {
      image(im1,0,0);
      num = 0;
  }

}
