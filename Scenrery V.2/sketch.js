// VERSION 2 IS OUT~!@#$
let rimg,img
function preload(){
    rimg = 'data:image/jpeg;base64,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'
  img = loadImage(rimg)  
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("blue");
  image(img, 0, 0,400,400)

  fill("brown")
  rect(0, 380, 2000, 400)
  fill("orange")
  rect(200, 340, 40, 40)
  rect(100, 340, 40, 40)
  rect(10, 340, 40, 40)
  rect(300, 340, 40, 40)
  fill("red")
  rect(0, 330, 400, 30)
}