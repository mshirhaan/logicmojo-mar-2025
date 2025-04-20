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

//Chatgpt converted java code works fine

class LFUCache {

    private int capacity;
    private int lowestFrequencyCount = 1;
    private Map<Integer, Node> nodeMap;
    private Map<Integer, DoublyLinkedList> frequencyMap;

    public LFUCache(int capacity) {
        this.capacity = capacity;
        this.nodeMap = new HashMap<>();
        this.frequencyMap = new HashMap<>();
    }

    // Get the value associated with the key
    public int get(int key) {
        if (!nodeMap.containsKey(key)) {
            return -1;
        }

        Node node = nodeMap.get(key);
        node.count++;

        // Remove the node from the old frequency list
        DoublyLinkedList oldDll = frequencyMap.get(node.count - 1);
        oldDll.remove(node);

        // If the old frequency list is empty and it was the lowest frequency, update the lowestFrequencyCount
        if (oldDll.size == 0 && node.count - 1 == lowestFrequencyCount) {
            lowestFrequencyCount++;
        }

        // Insert the node into the new frequency list
        if (!frequencyMap.containsKey(node.count)) {
            frequencyMap.put(node.count, new DoublyLinkedList());
        }
        DoublyLinkedList newDll = frequencyMap.get(node.count);
        newDll.put(node);

        return node.value;
    }

    // Put a new key-value pair into the cache
    public void put(int key, int value) {
        if (capacity == 0) return;

        if (nodeMap.containsKey(key)) {
            Node node = nodeMap.get(key);
            node.value = value;
            node.count++;

            // Remove the node from the old frequency list
            DoublyLinkedList oldDll = frequencyMap.get(node.count - 1);
            oldDll.remove(node);

            // If the old frequency list is empty and it was the lowest frequency, update the lowestFrequencyCount
            if (oldDll.size == 0 && node.count - 1 == lowestFrequencyCount) {
                lowestFrequencyCount++;
            }

            // Insert into the new frequency list
            if (!frequencyMap.containsKey(node.count)) {
                frequencyMap.put(node.count, new DoublyLinkedList());
            }
            DoublyLinkedList newDll = frequencyMap.get(node.count);
            newDll.put(node);
        } else {
            if (nodeMap.size() == capacity) {
                // Evict the least frequently used node
                DoublyLinkedList dll = frequencyMap.get(lowestFrequencyCount);
                int evictedKey = dll.evict();
                nodeMap.remove(evictedKey);
            }

            // Insert the new node
            Node node = new Node(key, value);
            nodeMap.put(key, node);

            if (!frequencyMap.containsKey(1)) {
                frequencyMap.put(1, new DoublyLinkedList());
            }
            lowestFrequencyCount = 1;
            DoublyLinkedList dll = frequencyMap.get(1);
            dll.put(node);
        }
    }
}

// Doubly Linked List to store nodes of the same frequency
class DoublyLinkedList {
    Node head;
    Node tail;
    int size;

    public DoublyLinkedList() {
        head = new Node(-1, -1);
        tail = new Node(-1, -1);
        head.next = tail;
        tail.prev = head;
        size = 0;
    }

    // Adds a node to the front of the list
    public void put(Node node) {
        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
        size++;
    }

    // Removes a node from the list
    public void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        size--;
    }

    // Evicts the least recently used node (tail)
    public int evict() {
        Node evicted = tail.prev;
        remove(evicted);
        return evicted.key;
    }
}

// Node class representing each key-value pair in the cache
class Node {
    int key;
    int value;
    int count;
    Node next;
    Node prev;

    public Node(int key, int value) {
        this.key = key;
        this.value = value;
        this.count = 1;
        this.next = null;
        this.prev = null;
    }
}
