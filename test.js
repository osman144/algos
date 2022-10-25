class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  // Insertion 
  insert(val){
    let newNode = new Node(val);
    if(!this.root){
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while(true){
      // ignore duplicates
      if(val === currentNode.val) return;

      // go to the left if less
      if(val < currentNode.val){
        if(currentNode.left === null){
          currentNode.left = newNode;
          return;
        }
        // keep going
        currentNode = currentNode.left
      }else if(val > currentNode.val){
        if(currentNode.right === null){
          currentNode.right = newNode;
          return;
        }
        // keep going
        currentNode = currentNode.right;
      }
    }
  }

  // print dfs pre-order fashion
  print(){
    let list = [];
    function traverse(node){
      list.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);

    console.log(list);
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

  // BFS
  bfs(){
    if(this.root === null) return;
    let queue = [this.root];
    let data = [];
    
    while(queue.length){
      let current = queue.shift();
      data.push(current.val);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return data;
  }

  // DFS pre-order
  dfsPre(){
    if(this.root === null) return;
    let list = [];

    function traverse(node){
      list.push(node.val);
      if(node.left) traverse(node.left);// all the way down
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    
    return list;
  }


  // DFS post-order
  dfsPost(){
    if(this.root === null) return;
    let list = [];

    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      list.push(node.val);
    }
    traverse(this.root);
    return list;
  }


  // DFS in-order
  dfsInOrder(){
    if(this.root === null) return;
    let list = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      list.push(node.val);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return list;
  }
}

let bst = new BST();

bst.insert(10);
bst.insert(6)
bst.insert(15)
bst.insert(20)
bst.insert(8);
bst.insert(3);

// bst.print();

console.log(bst.dfsInOrder());