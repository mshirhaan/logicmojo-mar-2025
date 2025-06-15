class Solution {
    topoSort(V, edges) {
        // code here
        let map = {}
       
        let result = []
        
        for(let i = 0; i<V; i++) {
            map[i] = new Set();
        }
        
        for(let edge of edges) {
            let [from, to] = edge;
            map[to].add(from);
        }
        
        let visited = new Set();
        
        for(let i = 0; i<V; i++) {
            if(visited.has(i)) {
                continue;
            }
            dfs(i);
        }
        
        
        function dfs(v) {
            if(visited.has(v)) {
                return;
            }
            for(let dependency of map[v]) {
                dfs(dependency);
            }
            result.push(v);
            visited.add(v);
        }
        
        return result;
    }
}
