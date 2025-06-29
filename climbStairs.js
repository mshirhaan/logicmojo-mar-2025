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

//DP
function climbStairs(n) {
    if(n<3) return n;
    let first = 1;
    let second = 2;
    let ans;

    for(let i = 3; i<=n; i++) {
        ans = first + second;
        first = second
        second = ans;
    }
    return ans
}
