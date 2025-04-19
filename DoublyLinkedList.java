class Node {
    int key;
    int value;
    Node prev;
    Node next;

    Node(int key, int value) {
        this.key = key;
        this.value = value;
    }
}

class DoublyLinkedList {
    Node head;
    Node tail;
    int size = 0;

    public void use(Node node) {
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

    public int evict() {
        int key = tail.key;
        if(size == 1) {
            head = null;
            tail = null;
        } else {
            tail = tail.prev;
            tail.next = null;
        }
        size--;
        return key;
    } 

    public void put(Node node) {
        if(size == 0) {
            head = node;
            tail = node;
        } else {
            node.next = head;
            head.prev = node;
            head = node;
        }
        size++;
    }
}

class LRUCache {
    Map<Integer, Node> map;
    DoublyLinkedList list;
    int capacity;
    public LRUCache(int capacity) {
        map = new HashMap<>(); 
        list = new DoublyLinkedList();
        this.capacity = capacity;
    }
    
    public int get(int key) {
        if(!map.containsKey(key)) {
            return -1;
        }
        list.use(map.get(key));

        return map.get(key).value;
    }
    
    public void put(int key, int value) {
        if(map.containsKey(key)) {
            map.get(key).value = value;
            list.use(map.get(key));
            return;
        }
        Node node = new Node(key, value);
        if(map.size() == capacity) {
            int keyToRemove = list.evict();
            map.remove(keyToRemove);
        }
        map.put(key, node);
        list.put(node);
        list.use(node);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
