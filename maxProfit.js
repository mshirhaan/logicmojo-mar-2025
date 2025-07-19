//This is a straightforward approach and ultimately this is the Tabular approch of DP
var maxProfit = function(prices) {
    let currPrice = prices[0]
    let profit = 0

    for(let i = 1; i < prices.length; i++) {
        currPrice = Math.min(currPrice, prices[i])
        profit = Math.max(profit, prices[i]-currPrice)
    }
    return profit;
};

//TOPDOWN DP

var maxProfit = function(prices) {

    function helper(i, canIBuy, memo) {
        if(i == prices.length) {
            return 0
        }
        if(memo[i+","+canIBuy] != undefined) {
            return memo[i+","+canIBuy]
        }
        if(canIBuy) {
            let dontBuyProfit = -prices[i] + helper(i+1, false, memo)
            let buyProfit = helper(i+1, true, memo)
            memo[i+","+canIBuy] = Math.max(dontBuyProfit, buyProfit);
            return memo[i+","+canIBuy]
        } else {
            memo[i+","+canIBuy] = Math.max(prices[i], helper(i+1, false, memo));
            return memo[i+","+canIBuy];
        }
    }

    let memo ={}

    let profit = helper(0, true, memo)
    if(profit < 0) {
        profit = 0;
    }

    return profit;
};

