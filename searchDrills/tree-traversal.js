

class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
      return;
    }

    if (key < this.key) {
      if (this.left) {
        this.left.insert(key, value);
      } else {
        this.left = new BinarySearchTree(key, value, this);
      }
    } else {
      if (this.right) {
        this.right.insert(key, value);
      } else {
        this.right = new BinarySearchTree(key, value, this);
      }
    }

  }

  find(key) {
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (key === this.key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    //if node getting replaced has a parent
    if(this.parent){
      //if on left or right of parent
      if(this.parent.left === this){
        this.parent.left = node;
      } else if (this.parent.right === this){
        this.parent.right = node;
      }

      if(node){
        node.parent = this.parent;
      }
    } else {
      //root item being replaced
      if(node){
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }

  }

  _findMin() {
    if(this.left){
      return this.left._findMin();
    } else {
      return this;
    }
  }
}

//module.exports = BinarySearchTree;

function main(){
  const bst = new BinarySearchTree();

  bst.insert(25, 'twentyfive');
  bst.insert(15, 'fifteen');
  bst.insert(50, 'fifty');
  bst.insert(10, 'ten');
  bst.insert(24, 'twentyfour');
  bst.insert(35, 'thirtyfive');
  bst.insert(70, 'seventy');
  bst.insert(4, 'four');
  bst.insert(12, 'twelve');
  bst.insert(18, 'eighteen');
  bst.insert(31, 'thirtyone');
  bst.insert(44, 'fourtyfour');
  bst.insert(66, 'sixtysix');
  bst.insert(90, 'ninety');
  bst.insert(22, 'twentytwo');

  // console.log(preorder(bst));
  // console.log(inorder(bst));
  console.log(postorder(bst));
}

main();

//input: tree
//output: array of values

function preorder(tree){
  // const resultArr = [];
  //base case
  if(!tree){
    return [];
  }

  // resultArr.push(tree.key);

  const leftValues = [tree.key]
    .concat(preorder(tree.left)) 
    .concat(preorder(tree.right));

  return leftValues;
}

function inorder(tree){
  if(!tree){
    return [];
  }
  const leftValues = []
    .concat(inorder(tree.left))
    .concat([tree.key]) 
    .concat(inorder(tree.right));
  return leftValues;
}

function postorder(tree){
  if(!tree){
    return [];
  }
  const leftValues = []
    .concat(postorder(tree.left))
    //when it ends, it starts to collapse after an empty array is returned
    //then after the whole left side finishes, the right half of the tree
    //is then called
    
    .concat(postorder(tree.right))
    .concat([tree.key]) ;
  return leftValues;

}