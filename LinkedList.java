public class test {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();

        list.addFirst(10);

        list.addLast(20);

        list.addLast(30);

        list.addLast(40);

        list.removeFirst();

        list.removeLast();

        list.remove(1);

    }
}

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
    }
}

class LinkedList {
    Node head = null;
    int size = 0;

    public void addFirst(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
        size++;
    }

    public void add(int index, int data) {
        if (index > size || index < 0) {
            return;
        }
        Node newNode = new Node(data);
        Node curr = head;
        for (int i = 1; i < index; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        size++;
    }

    public void addLast(int data) {
        this.add(this.size, data);
    }

    public void removeFirst() {
        if (head == null) {
            return;
        }

        Node temp = head;
        head = head.next;
        temp.next = null;
        size--;
    }

    public void removeLast() {
        if (head == null) {
            return;
        }

        if (size == 1) {
            this.removeFirst();
            return;
        }

        Node curr = head;
        while (curr.next.next != null) {
            curr = curr.next;
        }
        curr.next = null;
        size--;
    }

    public void remove(int index) {
        if (index >= size || index < 0) {
            return;
        }
        if (index == 0) {
            this.removeFirst();
            return;
        }
        if (index == size - 1) {
            this.removeLast();
            return;
        }
        Node curr = head;
        for (int i = 1; i < index; i++) {
            curr = curr.next;
        }
        Node temp = curr.next;
        curr.next = curr.next.next;
        temp.next = null;
        size--;
    }
}
