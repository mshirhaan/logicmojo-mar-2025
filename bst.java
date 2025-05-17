class Main {
    public static void main(String[] args) {

        BinarySearchTree tree = new BinarySearchTree();
        tree.add(5);
        tree.add(3);
        tree.add(8);
        tree.add(1);
        tree.add(4);
        tree.add(6);
        tree.add(9);

        tree.inorder();
    }
}

class BinarySearchTree {
    Node root;

    public void add(int value) {
        Node newNode = new Node(value);

        if (root == null) {
            root = newNode;
        }

        Node current = root;
        while (true) {
            if (value < current.value) {
                if (current.left == null) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (current.right == null) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    public void search(int value) {
        Node current = root;
        while (true) {
            if (current.value == value) {
                System.out.println("Found: " + value);
                break;
            }
            if (value < current.value) {
                if (current.left == null) {
                    break;
                }
                current = current.left;
            } else {
                if (current.right == null) {
                    break;
                }
                current = current.right;
            }
        }
    }

    public void searchRecursive(int value) {
        helperSearch(root, value);
    }

    private void helperSearch(Node current, int value) {
        if (current.value == value) {
            System.out.println("Found: " + value);
            return;
        }
        if (value < current.value) {
            if (current.left == null) {
                return;
            }
            helperSearch(current.left, value);
        } else {
            if (current.right == null) {
                return;
            }
            helperSearch(current.right, value);
        }
    }

    public void inorder() {
        inorderHelper(root);
    }

    private void inorderHelper(Node node) {
        if (node == null) {
            return;
        }
        inorderHelper(node.left);
        System.out.println(node.value);
        inorderHelper(node.right);
    }
}

class Node {
    int value;
    Node left;
    Node right;

    Node(int value) {
        this.value = value;
    }
}
