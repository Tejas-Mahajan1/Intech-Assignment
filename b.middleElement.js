class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  
  // 
  findMiddle() {
    if (!this.head) return null;
    
    let slow = this.head;
    let fast = this.head;
    
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    return slow.value;
  }
}

// Eg. linked list
const list = new LinkedList();
[1, 2, 3, 4, 5].forEach(num => list.append(num));

// Output :-
console.log(`Middle element: ${list.findMiddle()}`); 

const list2 = new LinkedList();
[1, 2, 3, 4, 5, 6].forEach(num => list2.append(num));

// Output :-
console.log(`Middle element: ${list2.findMiddle()}`); 