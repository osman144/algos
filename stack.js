class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    // push to head
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this.length;
  }

  pop(){
    // pop or remove from head;
    if(!this.head) return null;
    let temp = this.head;
    if(this.head === this.tail){
      this.tail = null;
    }
    this.head = this.head.next; 
    this.length--;

    return temp.val;
  }
}

let stack = new Stack();

stack.push(2);
stack.push(1);
console.log(stack)
stack.pop();

console.log(stack);