class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  // Insertion
  insert(val){
    let newNode = new Node(val);
    // is there a root already
    if(this.root === null){
      this.root = newNode;
      return; 
    }
    let currentNode = this.root
    while(true){
      // we're ignoring duplicates but if we didn't then we can do 
      if(val === currentNode.val) return undefined;

      // go to left if less than current value
      if(val < currentNode.val){
        // if left is null, insert there
        if(currentNode.left === null){
          currentNode.left = newNode;
          return;
        }
        // keep going through the loop
        currentNode = currentNode.left;
        
      } else if(val > currentNode.val){
        // go to right
        if(currentNode.right === null){
          currentNode.right = newNode;
          return;
        }
        // keep going 
        currentNode = currentNode.right
      }
    }
  }

  // Search
  find(val){
    if(this.root === null) return false;
    // looking for val
    let current = this.root;
    while(current){
      if(current.val === val) return true;
      if(val < current.val){
        // go to the left
        current = current.left;
      }else if (val > current.val){
        // go to the right;
        current = current.right;
      }
    }
    
    return false;
  }

  BFS(){
    let currentNode = this.root;
    let queue = [];
    let data = [];

    queue.push(currentNode);
    while(queue.length){
      // shift removes value from queue
      // Add current node to data
      currentNode = queue.shift();
      data.push(currentNode.val);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return data; 
  }

  DFSPreOrder(){
    let list = [];
    function traverse(node){
      list.push(node.val);
      // if left node exists, call traverse on it
      if(node.left) traverse(node.left);

      if(node.right) traverse(node.right);
    }
    // call the function
    traverse(this.root);
    return list;
  }

  DFSPostOrder(){
    let list = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      list.push(node.val);
    }
    traverse(this.root);
    return list;
  }

  DFSInOrder(){
    let list = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      list.push(node.val)
      if(node.right) traverse(node.right) 
    }
    traverse(this.root);
    return list;
  }
}

let myTree = new BinarySearchTree();

// myTree.insert(50);
// myTree.insert(49);
// myTree.insert(51);

// myTree.insert(48);
// myTree.insert(52);
// myTree.insert(47);
// myTree.insert(53);
// myTree.insert(46);
// myTree.insert(54);


console.log(myTree.DFSPreOrder());