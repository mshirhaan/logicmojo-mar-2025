var findCheapestPrice = function(n, flights, src, dst, k) {
    let map = {}
    for(let i = 0 ; i<n; i++) {
        map[i] = [null, Infinity, 0];
    }
    map[src] = [null, 0, -1];

    for(let i = 0; i<n; i++) {
        for(let flight of flights) {
            let [from, to, price] = flight;

            if(map[from][1] + price < map[to][1]) {
                if(map[from][2]+1 > k) {
                    continue;
                }
                map[to] = [from, map[from][1] + price, map[from][2]+1]
            }
        }
    }
    return map[dst][1]!=Infinity ? map[dst][1] : -1;
};


class PriorityQueuee {
  constructor() {
    this.queue = [];
  }

  // Add an item with priority
  enqueue(value, priority) {
    const item = { value, priority };
    this.queue.push(item);

    // Sort the queue based on priority (lower priority values come first)
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  // Remove and return the item with the highest priority
  dequeue() {
    return this.queue.shift(); // Removes the first element, which has the highest priority
  }

  // View the item at the front of the queue (highest priority)
  peek() {
    return this.queue[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.queue.length;
  }
}




var findCheapestPrice = function(n, flights, src, dst, k) {
    let map = {}
    for(let i = 0 ; i<n; i++) {
        map[i] = new PriorityQueuee();
        map[i].enqueue([null, Infinity, 0], Infinity)
    }
    map[src] = new PriorityQueuee();
    map[src].enqueue([null, 0, -1], 0)

    for(let i = 0; i<n; i++) {
        for(let flight of flights) {
            let [from, to, price] = flight;

            while(map[from].peek().value[2]+1 > k) {
                map[from].dequeue();
            }
            if(!map[from].isEmpty() && map[from].peek().value[1] + price < map[to].peek().value[1]) {
                map[to].enqueue([from, map[from].peek().value[1] + price, map[from].peek().value[2]+1], map[from].peek().value[1] + price);
            }
        }
    }
    return map[dst].peek().value[1]!=Infinity ? map[dst].peek().value[1] : -1;
};
