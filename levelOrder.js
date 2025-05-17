class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Create nodes
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

// Build the tree structure
node1.left = node2;   // node1's left child is node2
node1.right = node3;  // node1's right child is node3
node2.left = node4;   // node2's left child is node4
node2.right = node5;  // node2's right child is node5

// Tree structure
//       1
//     /   \
//    2     3
//   / \
//  4   5

function dfs(root, val) {
    if(!root) return null;
    
    console.log(root.val)
    let left = dfs(root.left, val)
    if(left) return left;
    return dfs(root.right, val)
}

function bfs(root) {
    let queue = [root]
    let ans = []

    while(queue.length) {
        let node = queue.shift();
        ans.push(node.val)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return ans;
} 

function bfsLevelOrder(root) {
    let queue = [root]
    let ans = []

    while(queue.length) {
        let levelSnapshot = queue.length
        let level = []
        while(levelSnapshot--) {
            let node = queue.shift();
            level.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        ans.push(level)
    }
    return ans;
} 

bfsLevelOrder(node1)
