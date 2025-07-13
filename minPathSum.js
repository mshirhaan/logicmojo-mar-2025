
var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length
    return helper(0,0)

    function helper(i, j, memo = {}) {
        if(i == m-1 && j == n-1) {
            return grid[i][j]
        }
        if(memo[i+","+j] != undefined) {
            return memo[i+","+j];
        }
        if(i>= m || j>= n) {
            return Infinity;
        }

        memo[i+","+j] = grid[i][j]+Math.min(helper(i+1,j, memo), helper(i,j+1, memo))
        return memo[i+","+j]
    }
};

var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length

    let memo = []

    for(let i = 0; i<m; i++) {
        memo[i] = []
    }

    return helper(0,0, memo)

    function helper(i, j, memo) {
        if(i == m-1 && j == n-1) {
            return grid[i][j]
        }
       
        if(i>= m || j>= n) {
            return Infinity;
        }

         if(memo[i][j] != undefined) {
            return memo[i][j];
        }

        memo[i][j] = grid[i][j]+Math.min(helper(i+1,j, memo), helper(i,j+1, memo))
        return memo[i][j]
    }
};


var minPathSum = function(grid) {
    let memo = []
    let m = grid.length;
    let n = grid[0].length;

    for(let i = 0; i < grid.length; i++) {
        memo.push([]);
    }

    memo[m-1][n-1] = grid[m-1][n-1]
    
    let tempSum = grid[m-1][n-1]
    for(let j = n-2; j>=0; j--) {
        memo[m-1][j] = grid[m-1][j] + tempSum
        tempSum = tempSum + grid[m-1][j];
    }

    tempSum = grid[m-1][n-1]
    for(let i = m-2; i>=0; i--) {
        memo[i][n-1] = grid[i][n-1] + tempSum
        tempSum = tempSum + grid[i][n-1];
    }

    for(let row = m-2; row>=0; row--) {
        for(let col = n-2; col>=0; col--) {
            memo[row][col] = grid[row][col] + Math.min(memo[row+1][col], memo[row][col+1])
        }
    }
    
    return memo[0][0]
};
