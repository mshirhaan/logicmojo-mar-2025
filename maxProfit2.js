var maxProfit = function(prices) {
    function helper(i, canIBuy, memo = {} ) {
        if(i == prices.length) {
            return 0
        }
        if(memo[i+","+canIBuy] != undefined) {
            return memo[i+","+canIBuy]
        }

        if(canIBuy) {
            let profit1 = -prices[i] + helper(i+1, false, memo)
            let profit2 = helper(i+1, true, memo)
            memo[i+","+canIBuy] = Math.max(profit1, profit2);
            return memo[i+","+canIBuy] 
        } else {
            memo[i+","+canIBuy] = Math.max(prices[i]+helper(i+1, true, memo), helper(i+1, false, memo))
            return memo[i+","+canIBuy];
        }
    }

    return helper(0, true)
};
