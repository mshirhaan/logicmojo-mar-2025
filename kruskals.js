
class Solution {
    parent = []
    rank = []
    spanningTree(V, edges) {
        // code here
        
        for(let i = 0; i<V; i++) {
            this.parent.push(i);
            this.rank.push(0);
        }
        
        let mst = [];
        
        edges.sort((e1, e2) => e1[2] - e2[2])
        
        for(let edge of edges) {
            if(this.union(edge[0], edge[1])) {
                mst.push(edge)
            }
        }
        
        return mst.reduce((carry, edge)=>carry+edge[2],0)
    }
    
    
    find(x) {
        if(this.parent[x] == x) {
            return x; 
        }
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x]
    }
    
    
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
    
        if(rootX == rootY) {
            return false;
        }
        if(this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
    
        } else if(this.rank[rootY] < this.rank[rootX]) {
    
            this.parent[rootY] = rootX;
    
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++
        }
        return true;
    }
}
