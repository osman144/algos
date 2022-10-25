class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val){
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

  // remove from head
  shift(){
    if (!this.length || !this.head) return undefined;
    let currentHead = this.head
    this.head = currentHead.next
    this.length--;
    if (this.length === 0) {
        this.tail = null;
    }
    return currentHead.val;
  }

  removeAtTail(){
    if(this.length <= 1){
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    };
    let secondToLastTail = null;
    let current = this.head;

    while(current.next){
      secondToLastTail = current;
      current = current.next;
    }
    secondToLastTail.next = null;
    this.tail = secondToLastTail;
    this.length--;
  }

  reverse(){
    // swap the heads and the tail
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null;
    let next;
    while(current){
      next = current.next // 2
      current.next = prev // null <- 1
      prev = current // 1
      current = next // 2
    }
  }

  // print to help visualize reversed solution
  print(){
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.val);
      current = current.next
    }
    console.log(arr)
  }
}

// let one = new Node(1);

let ll = new LinkedList();

ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(5);

ll.print();

ll.reverse();
ll.print()