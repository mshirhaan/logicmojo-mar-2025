//just count
function uniquePaths(m, n) {
    let trolly = []
    helper(1,1,m,n, [], trolly);
    return trolly.length;

    function helper(currRow, currCol, maxRows, maxColums, bag, trolly) {
        if(currRow == maxRows && currCol == maxColums) {
            trolly.push([...bag]);
            return;
        }
        if(currRow<maxRows) {
            bag.push('down');
            helper(currRow+1, currCol, maxRows, maxColums, bag, trolly);
        }

        if(currCol<maxColums) {
            bag.push('right');
            helper(currRow, currCol+1, maxRows, maxColums, bag, trolly);
        }
    }
};

//return paths
function uniquePaths(m, n) {
    return helper(1,1,m,n);

    function helper(currRow, currCol, maxRows, maxColums) {
        if(currRow == maxRows && currCol == maxColums) {
            return 1;
        }
        let count = 0;
        if(currRow<maxRows) {
            count+= helper(currRow+1, currCol, maxRows, maxColums);
        }

        if(currCol<maxColums) {
            count+= helper(currRow, currCol+1, maxRows, maxColums);
        }

        return count;
    }
};
