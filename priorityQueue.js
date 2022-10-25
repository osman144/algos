class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

// Implement using min heap
// so for us, lower number means higher priority

class PriorityQueue{
  // implement similar to heap but we'll be using nodes
  // PQ is basically a Heap with Nodes which contains properties
  // val and priority
  constructor(){
    this.values = [];
  }

  // add
  enqueue(val, priority){
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp(){
    let index = this.values.length - 1;
    const element = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index-1)/2);
      let parent = this.values[parentIndex];
      if(element.priority <= parent.priority) break;
      // swap
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  // delete
  dequeue(){
    const max = this.values[0];
    const end = this.values.pop(); // remove end
    if(this.values.length > 0){
      this.values[0] = end; // update start value
      this.sinkDown();
    }
    return max;
  }

  sinkDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild,rightChild;
      let swap = null;

      if(leftChildIndex < length){
        leftChild = this.values[leftChildIndex];
        if(leftChild.priority > element.priority){
          swap = leftChildIndex;
        }
      }
      if(rightChildIndex < length){
        rightChild = this.values[rightChildIndex];
        if(
            (swap === null && rightChild.priority > element.priority) || 
            (swap !== null && rightChild.priority > leftChild.priority)
          ){
            swap = rightChildIndex;
        }
      }
      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}


let pr = new PriorityQueue();

pr.enqueue('flat tire', 1)
pr.enqueue('take nap', 7)
pr.enqueue('take shower', 5)
pr.enqueue('gym', 2)

console.log(pr.values);
pr.dequeue();
console.log(pr.values);