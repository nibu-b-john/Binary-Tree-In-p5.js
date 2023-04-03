//NODE//
function Node(value) {
  this.left = null;
  this.right = null;
  this.value = value;
  this.x = null;
  this.y = null;
  this.parentX = null;
  this.parentCordY = null;
  this.childCordX = null;
  this.childCordY = null;
  this.parentVal = null;
  this.childVal = null;
}

Node.prototype.addNode = function (value) {
  if (value.value < this.value) {
    if (this.left == null) {
      this.left = value;
      this.left.x = this.x - 60;
      this.left.y = this.y + 60;
      this.left.parentCordX = this.x;
      this.left.parentCordY = this.y;
      this.left.childCordX = this.left.x;
      this.left.childCordY = this.left.y;
      this.left.childVal = this.left.value;
      this.left.parentVal = this.value;
    } else {
      this.left.addNode(value);
    }
  } else if (value.value > this.value) {
    if (this.right == null) {
      this.right = value;
      this.right.x = this.x + 60;
      this.right.y = this.y + 60;
      this.right.parentCordX = this.x;
      this.right.parentCordY = this.y;
      this.right.childCordX = this.right.x;
      this.right.childCordY = this.right.y;
    } else {
      this.right.addNode(value);
    }
  }
};

var arrX = [];
var arrY = [];
var arrVal = [];
var arrNode = [];
Node.prototype.visit = function (count) {
  if (this.left != null) {
    this.left.visit();
  }
  arrX.push(this.x);
  arrY.push(this.y);
  arrVal.push(this.value);
  arrNode.push(this);

  if (this.right != null) {
    this.right.visit();
  }
};

var reoccuringCord = [];

Node.prototype.checkForCollision = function () {
  for (let x = 0; x < arrNode.length; x++) {
    background(50);
    for (let i = 0; i < arrNode.length; i++) {
      for (let j = 0; j < arrNode.length; j++) {
        if (arrNode[i].x == arrNode[j].x && i != j) {
          if (arrNode[i].y == arrNode[j].y && i != j) {
            reoccuringCord.push(arrNode[i]);
          }
        }
      }
    }
    var trigger = -1;
    reoccuringCord.sort(function (a, b) {
      return a.y - b.y;
    });
    reoccuringCord.sort(function (a, b) {
      return a.x - b.x;
    });
    reoccuringCord = [...new Set(reoccuringCord)];
    for (let i = 0; i < reoccuringCord.length; i++) {
      reoccuringCord[i].x = reoccuringCord[i].x + 60 * trigger;

      reoccuringCord[i].childCordX =
        reoccuringCord[i].childCordX + 60 * trigger;
      trigger = trigger * -1;
    }
    reoccuringCord = [];
    this.redoPixels();
  }
};

Node.prototype.redoPixels = function (count) {
  if (this.left != null) {
    this.left.redoPixels();
  }

  stroke(0);
  strokeWeight(3);
  fill(50);
  circle(this.x + 18, this.y - 10, 50);

  fill(255);
  text(this.value, this.x, this.y);
  if (this.right != null) {
    this.right.redoPixels();
  }
};
