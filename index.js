// use strict ;

function setup() {
  createCanvas(screen.width, screen.height);
  background(50);
  textSize(22);
  var tree = new Tree();
  for (var i = 0; i < 50; i++) {
    var randomNo = floor(random(0, 1000));
    tree.addValue(randomNo);
  }
  tree.traverse();
}
function draw() {
  // line(50, 50, 60, 90);
}
