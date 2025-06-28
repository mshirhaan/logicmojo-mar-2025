/**
 * @param {number[][]} adj
 * @param {number} v
 * @param {number} e
 * @returns {number}
 */
 
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Helper function to swap elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Helper function to bubble up the element at index i
  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parentIndex].priority > this.heap[index].priority) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // Helper function to bubble down the element at index i
  bubbleDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallest].priority) {
      smallest = leftChildIndex;
    }
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallest].priority) {
      smallest = rightChildIndex;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.bubbleDown(smallest);
    }
  }

  // Add a new element to the queue
  enqueue(data, priority) {
    const newElement = { data, priority };
    this.heap.push(newElement);
    this.bubbleUp(this.heap.length - 1);  // Bubble up to maintain heap property
  }

  // Remove and return the element with the highest priority
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const root = this.heap[0];
    const lastElement = this.heap.pop();  // Remove the last element
    
    if (this.heap.length > 0) {
      this.heap[0] = lastElement;  // Move the last element to the root
      this.bubbleDown(0);  // Bubble down to maintain heap property
    }

    return root;
  }

  // Get the element with the highest priority without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.heap[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.heap.length;
  }

  // Print the elements in the queue
  printQueue() {
    console.log(this.heap);
  }
}


class Solution {
    spanningTree(v, adj) {
        let pq = new PriorityQueue();
        
        let visited = new Set();
        
        let mstWeight = 0;
        
        pq.enqueue([0,0,0], 0);
            
    
        while(pq.size()) {
            let [src, dest, dist] = pq.dequeue().data;
            if(!visited.has(dest)) {
                visited.add(dest);
                mstWeight+=dist;
                
                for(let edge of adj[dest]) {
                    pq.enqueue([dest,edge[0],edge[1]], edge[1]);
                }
            }
        }
        return mstWeight;
    }
}
