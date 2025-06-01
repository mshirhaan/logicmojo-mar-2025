class PPriorityQueue {
    arr = [];
    add(node, distance) {
        this.arr.push({node: node, distance: distance})
        this.arr.sort((a,b)=> a.distance - b.distance);
    }
    popTop() {
        return this.arr.shift();
    }
}


function networkDelayTime(times, n, k) {
    let adjList = {};

    for(let time of times) {
        let [src, dest, dist] = time;      
        if(adjList[src] == undefined) {
            adjList[src] = {};
        }
        adjList[src][dest] = dist
    }

    let distanceTable = {}
    for(let i = 1; i <=n; i++) {
        distanceTable[i] = {distanceFromK: Infinity, previousVertex: null}
    }
    distanceTable[k].distanceFromK = 0;

    let visited = new Set();

    let minPQ = new PPriorityQueue();
    minPQ.add(k, 0);

    while(minPQ.arr.length) {
        let {node, distance} = minPQ.popTop();
        visited.add(node);

        for(let neighbor of Object.keys(adjList[node] || {})) {
            if(!visited.has(neighbor) && 
             adjList[node][neighbor] + distanceTable[node].distanceFromK < distanceTable[neighbor].distanceFromK) {
                distanceTable[neighbor] = {
                                            distanceFromK: adjList[node][neighbor] +  distanceTable[node].distanceFromK,
                                            previousVertex: +node
                                          }
                minPQ.add(neighbor, adjList[node][neighbor] +  distanceTable[node].distanceFromK);
            }
        }
    }
    
    let ans = -Infinity;
    for(let value of Object.values(distanceTable)) {
        if(value.distanceFromK == Infinity) {
            return -1;
        }
        ans = Math.max(ans, value.distanceFromK)
    }

    return ans
};
