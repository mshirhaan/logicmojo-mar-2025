class Solution {
    isCyclic(V, edges) {
        // code here
        let res = this.topoSort(V, edges);
        if(res.length == V) return false;
        
        return true;
    }
    
    topoSort(V, edges) {
        // code here
        let map = {}
        let indegrees = []
        let result = []
        
        for(let i = 0; i<V; i++) {
            map[i] = new Set();
            indegrees[i] = 0;
        }
        
        for(let edge of edges) {
            let [from, to] = edge;
            map[from].add(to);
            indegrees[to]++;
        }
        
        let queue = []
        
        for(let i = 0; i<V; i++) {
            if(indegrees[i] == 0) {
                queue.push(i);
            }
        }
        
        while(queue.length) {
            let vertex = queue.shift();
            result.push(vertex);

            for(let dependent of map[vertex]) {
                indegrees[dependent]--;
                if(indegrees[dependent] == 0) {
                    queue.push(dependent);
                }
            }
        }
        
        return result;
    }   
}
