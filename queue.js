// queue in a linked list

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this.length
  }

  dequeue(){
    if(!this.head || !this.length) return null;
    let currentHead = this.head;
    this.head = this.head.next;
    if(this.length === 0){
      this.tail = null;
    }

    this.length--;
    return currentHead.val;
  }
}

let qq = new Queue;

console.log(qq)
console.log(qq.enqueue(2));

console.log(qq);

console.log(qq.dequeue());

console.log(qq)


// let queue = [];

// queue.push(1);
// queue.push(2);
// console.log(queue)

// queue.shift();
// queue.shift();
// console.log(queue)