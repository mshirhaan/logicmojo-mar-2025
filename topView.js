
class Solution {
    topView(root) {
        if(!root) return []
        let queue = [{node: root, x: 0}]
        let map = {};
        
        let nodeCount = 0;
    
        while(queue.length) {
            let {node, x} = queue.shift();
            nodeCount++;
            if(!map[x]) {
                map[x] = node.data;
            }
            if(node.left) queue.push({node : node.left, x: x-1})
            if(node.right) queue.push({node: node.right, x:x+1})
        }
        let ans = []
        for(let i = -nodeCount; i<=nodeCount; i++) {
            if(map[i]) {
                ans.push(map[i])
            }
        }
        return ans;
    } 
}
