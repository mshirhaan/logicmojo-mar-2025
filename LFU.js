//Js code derived in class, but Time limit exceeded was coiming
class DoublyLinkedList {
    head;
    tail;
    size = 0;

    use(node) {
        if(head == node) return;

        if(node == tail) {
            tail = tail.prev;
            tail.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        node.next = head;
        head.prev = node;
        head = node;
    }

    evict() {
        let key = this.tail.key;
        if(this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return key;
    } 

    put(node) {
        if(this.size == 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    remove(node) {
        //node = 1
        // null<-1->null
        if(this.size == 1) {
            this.head = null;
            this.tail = null;
            node.next = null;
            node.prev = null;
        } 
        //node = 1
        // null<-1-><-2->null
        else if(this.head == node) {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
            node.prev = null;
        }
        //node = 2
        // null<-1-><-2->null 
        else if(this.tail == node) {
            this.tail = node.prev;
            this.tail.next = null;
            node.next = null;
            node.prev = null;
        }
        //node = 2
        // null<-1-><-2-><-3-><-4->null
        else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = null;
            node.prev = null;
        }
        this.size--;
    }
}



class Node {
    key;
    value;
    count = 1;
    next = null;
    prev = null;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class LFUCache {
    capacity = 0;
    lowestFrequencyCount = 1;
    nodeMap = {};
    frequencyMap = {};

    constructor(capacity) {
        this.capacity = capacity
    }
    
    get (key) {
        if(this.nodeMap[key] == undefined) {
            return -1;
        }

        let node = this.nodeMap[key]
        node.count++;

        let oldDll = this.frequencyMap[node.count-1]
        oldDll.remove(node);
        if(oldDll.size == 0 && node.count-1 == this.lowestFrequencyCount) {
            this.lowestFrequencyCount++;
        }

        if(this.frequencyMap[node.count] == undefined) {
            this.frequencyMap[node.count] = new DoublyLinkedList();
        }
        let newDll = this.frequencyMap[node.count]
        newDll.put(node);

        return node.value;
    }

    put (key, value) {
        if(this.nodeMap[key] != undefined) {
            let node = this.nodeMap[key]
            node.value = value;
            node.count++;

            let oldDll = this.frequencyMap[node.count-1]
            oldDll.remove(node);
            if(oldDll.size == 0 && node.count-1 == this.lowestFrequencyCount) {
                this.lowestFrequencyCount++;
                this.frequencyMap[node.count-1] = null;
            }

            if(this.frequencyMap[node.count] == undefined) {
                this.frequencyMap[node.count] = new DoublyLinkedList();
            }
            let newDll = this.frequencyMap[node.count]
            newDll.put(node);
        } else {
            //cache full
            if(Object.keys(this.nodeMap).length == this.capacity) {
                let dll = this.frequencyMap[this.lowestFrequencyCount]
                let key = dll.evict();
                delete this.nodeMap[key];
            }

            let node = new Node(key, value);
            this.nodeMap[key] = node;
            if(this.frequencyMap[1] == undefined) {
                this.frequencyMap[1] = new DoublyLinkedList();
            }
            this.lowestFrequencyCount = 1;
            let dll = this.frequencyMap[1];
            dll.put(node);
        }
    };
    
};

//Chatgpt converted map = {} to new Map(), and it works

class DoublyLinkedList {
    head;
    tail;
    size = 0;

    use(node) {
        if (head == node) return;

        if (node == tail) {
            tail = tail.prev;
            tail.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        node.next = head;
        head.prev = node;
        head = node;
    }

    evict() {
        let key = this.tail.key;
        if (this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return key;
    }

    put(node) {
        if (this.size == 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    remove(node) {
        if (this.size == 1) {
            this.head = null;
            this.tail = null;
            node.next = null;
            node.prev = null;
        } else if (this.head == node) {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
            node.prev = null;
        } else if (this.tail == node) {
            this.tail = node.prev;
            this.tail.next = null;
            node.next = null;
            node.prev = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = null;
            node.prev = null;
        }
        this.size--;
    }
}

class Node {
    key;
    value;
    count = 1;
    next = null;
    prev = null;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class LFUCache {
    capacity = 0;
    lowestFrequencyCount = 1;
    nodeMap = new Map();   // Changed from {} to Map()
    frequencyMap = new Map(); // Changed from {} to Map()

    constructor(capacity) {
        this.capacity = capacity;
    }

    get(key) {
        if (!this.nodeMap.has(key)) {
            return -1;
        }

        let node = this.nodeMap.get(key);
        node.count++;

        let oldDll = this.frequencyMap.get(node.count - 1);
        oldDll.remove(node);
        if (oldDll.size == 0 && node.count - 1 == this.lowestFrequencyCount) {
            this.lowestFrequencyCount++;
        }

        if (!this.frequencyMap.has(node.count)) {
            this.frequencyMap.set(node.count, new DoublyLinkedList());
        }
        let newDll = this.frequencyMap.get(node.count);
        newDll.put(node);

        return node.value;
    }

    put(key, value) {
        if (this.nodeMap.has(key)) {
            let node = this.nodeMap.get(key);
            node.value = value;
            node.count++;

            let oldDll = this.frequencyMap.get(node.count - 1);
            oldDll.remove(node);
            if (oldDll.size == 0 && node.count - 1 == this.lowestFrequencyCount) {
                this.lowestFrequencyCount++;
                this.frequencyMap.delete(node.count - 1);  // Cleanup the empty frequency list
            }

            if (!this.frequencyMap.has(node.count)) {
                this.frequencyMap.set(node.count, new DoublyLinkedList());
            }
            let newDll = this.frequencyMap.get(node.count);
            newDll.put(node);
        } else {
            // Cache is full, evict the least frequently used node
            if (this.nodeMap.size == this.capacity) {
                let dll = this.frequencyMap.get(this.lowestFrequencyCount);
                let evictedKey = dll.evict();
                this.nodeMap.delete(evictedKey);  // Remove evicted node from nodeMap
            }

            let node = new Node(key, value);
            this.nodeMap.set(key, node);

            if (!this.frequencyMap.has(1)) {
                this.frequencyMap.set(1, new DoublyLinkedList());
            }
            this.lowestFrequencyCount = 1;
            let dll = this.frequencyMap.get(1);
            dll.put(node);
        }
    }
}


