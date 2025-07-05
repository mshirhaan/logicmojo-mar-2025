var uniquePaths = function(m, n) {

    let map = {}

    
    let ans =  helper(0,0)
    return ans

    function helper(row,col, map = {}) {
        if(map[row+","+col]!=undefined) {
            return map[row+","+col]
        }
        if(row >=m || col>=n) return 0;

        if(row == m-1 && col == n-1) return 1;

        let right = helper(row, col+1, map)
        let down = helper(row+1, col, map)
        map[row+","+col] = right+down;
        return map[row+","+col]
    }
};


var uniquePaths = function(m, n) {
    let map = []
    for(let i = 0; i<m; i++) {
        map[i]=[]
    }
    for(let col = 0; col<n;col++) {
        map[m-1][col] = 1;
    }
    for(let row = 0; row<m;row++) {
        map[row][n-1] = 1;
    }

    for(let row = m-2; row>=0;row--) {
        for(let col=n-2; col>=0;col--) {
            map[row][col] = map[row][col+1]+map[row+1][col];
        }
    }
    return map[0][0]
};

var uniquePaths = function(m, n) {
    let map;

    if(n<m) {
        map = Array(n).fill(1);

        for(let row = 0; row<m-1;row++) {
            for(let col = n-2; col>=0;col--) {
                map[col] = map[col] + map[col+1]
            }
        }
    } else {
        map = Array(m).fill(1);

        for(let col = 0; col<n-1;col++) {
            for(let row = m-2; row>=0;row--) {
                map[row] = map[row] + map[row+1]
            }
        }
    }

    return map[0]
};

var uniquePaths = function(m, n) {

    let first = m < n ? m : n;

    let second = m > n ? m : n;

    let map = Array(first).fill(1);

        for(let i = 0; i<second-1;i++) {
            for(let col = first-2; col>=0;col--) {
                map[col] = map[col] + map[col+1]
            }
        }
    return map[0]
};
