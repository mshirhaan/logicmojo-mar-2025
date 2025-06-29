var shortestPathBinaryMatrix = function(grid) {

    let n = grid.length;

    if(grid[0][0] == 1 || grid[n-1][n-1]) return -1;

    let distance = []

    for(let i = 0; i<n; i++) {
        distance[i] = []
        for(let j = 0; j<n; j++) {
            distance[i][j] = Infinity;
        }
    }

    distance[0][0] = 1

    let queue = [[0,0,1]]

    //let visited = new Set()
    

    while(queue.length) {
        let [row, col, dist] = queue.shift()
        
        //visited.add(row+","+col);

        //&& !visited.contains(row+rowAdd + "," col+colAdd)

        //8 directions
        let directions = [[-1,0], [-1,1], [0, 1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1]]
        for(let [rowAdd, colAdd] of directions) {
            if(!isOutsideGrid(row+rowAdd, col+colAdd, n) ) {
                if(grid[row+rowAdd][col+colAdd] == 0) {
                    queue.push([row+rowAdd, col+colAdd, dist+1])
                    grid[row+rowAdd][col+colAdd]=1;
                    distance[row+rowAdd][col+colAdd]=dist+1;
                }
            }
        }
    }
    return distance[n-1][n-1] == Infinity ? -1 : distance[n-1][n-1];
};

let isOutsideGrid = (row, col, n) => row<0||row>=n||col<0||col>=n

shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]])
