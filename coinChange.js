var coinChange = function (coins, amount) {
    function helper(i, amount, memo) {
        if (amount == 0) {
            return 0;
        }

        if (amount < 0 || i == coins.length) {
            return Infinity
        }

        if(memo[i][amount]!=undefined) {
            return memo[i][amount]
        }

        let take = 1 + helper(i, amount - coins[i], memo);

        let notTake = helper(i + 1, amount, memo);

        memo[i][amount] = Math.min(take, notTake);
        return memo[i][amount]
    }

    let memo = []
    for(let i = 0; i<coins.length; i++) {
        memo[i] = []
    }
    let ans = helper(0, amount, memo)
    if(ans == Infinity) {
        ans = -1;
    }

    return ans
};
