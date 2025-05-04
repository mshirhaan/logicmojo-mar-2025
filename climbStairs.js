function climbStairs(n) {
    return helper(0, n);

    function helper(index, n) {
        if(index == n) {
            return 1;
        }
        let count = helper(index+1, n)
        if(index <= n-2) {
            count = count + helper(index+2, n)
        }
        return count;
    }
}
