//TREE//
function Tree() {
  this.root = null;
}

Tree.prototype.traverse = function () {
  this.root.visit();
  this.root.checkForCollision();
};

Tree.prototype.addValue = function (value) {
  var node = new Node(value);
  if (this.root == null) {
    this.root = node;
    this.root.x = width / 2;
    this.root.y = 60;
    fill(255);
    text(value, this.root.x, this.root.y);
  } else {
    this.root.addNode(node);
  }
};
