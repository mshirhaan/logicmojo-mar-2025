function zigzagLevelOrder(root) {
    if(!root) return []
    let queue = [root]
    let ans = []

    let flag = false;
    while(queue.length) {
       
        let levelSnapshot = queue.length
        let level = []
        while(levelSnapshot--) {
            let node = queue.shift();
            level.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        if(flag) {
            level= level.toReversed();
        }
        ans.push(level)
        flag = !flag;
    }
    
    return ans;
} 
