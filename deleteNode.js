//hacky approach by returning two answers in an array
function deleteNode(root, key) {
    if(root == null) return null

    return helper(root, key)[0];

    function helper(root, key) {
        if(root.val == key) {
            return [attachRight(root), true];
        }
        if(root.left && root.left.val == key) {
            root.left = attachRight(root.left);
            return [root, true]
        }
        if(root.right && root.right.val == key) {
            root.right = attachRight(root.right)
            return [root, true]
        }
        if(root.left) {
            if(helper(root.left, key)[1]) {
                return [root, true]
            }
        }
        if(root.right) {
            if(helper(root.right, key)[1]) {
                return [root, true]
            }
        }
        return [root, false];
    }

    function attachRight(node) {
        if(node.left == null && node.right == null) {
            return null;
        }
        if(node.left == null) {
            return node.right
        }
        if(node.right == null) {
            return node.left;
        }
        let rightMostLeaf = findRightMostNode(node.left);
        rightMostLeaf.right= node.right
        return node.left;
    }

    function findRightMostNode(node) {
        if(node.right == null) {
            return node;
        }
        return findRightMostNode(node.right);
    }
};

//another approach

function deleteNode(root, key) {
    if(root == null) return null

    return helper(root, key);

    function helper(root, key) {
        if(root.val == key) {
            return attachRight(root);
        }
        if(root.left && root.left.val == key) {
            root.left = attachRight(root.left);
            return root
        }
        if(root.right && root.right.val == key) {
            root.right = attachRight(root.right)
            return root
        }
        if(root.left) {
            helper(root.left, key)
        }
        if(root.right) {
            helper(root.right, key)
        }
        return root
    }

    function attachRight(node) {
        if(node.left == null && node.right == null) {
            return null;
        }
        if(node.left == null) {
            return node.right
        }
        if(node.right == null) {
            return node.left;
        }
        let rightMostNode = findRightMostNode(node.left);
        rightMostNode.right= node.right
        return node.left;
    }

    function findRightMostNode(node) {
        if(node.right == null) {
            return node;
        }
        return findRightMostNode(node.right);
    }
};





