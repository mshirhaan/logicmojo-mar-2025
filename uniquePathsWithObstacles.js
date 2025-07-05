var uniquePathsWithObstacles = function(obstacleGrid) {
    
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let memo = []
    for(let i = 0; i<m;i++) {
        memo[i] = [];
    }

    return helper(0,0, memo)

    function helper(row,col,memo) {

        if(row == m || col == n) {
            return 0;
        }
        if(memo[row][col] != undefined) {
            return memo[row][col];
        }
        if(obstacleGrid[row][col] == 1) {
            return 0;
        }
        
        if(row == m-1 && col == n-1) {
            return 1
        }

        let right = helper(row, col+1, memo);
        let down = helper(row+1, col, memo);

        memo[row][col] = right+down
        return memo[row][col];
    }
};
