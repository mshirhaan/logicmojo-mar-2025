/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    return helper(0)

    function helper(i, canBuy = true, transactionsLeft = 2, memo = new Map()) {
        if(i == prices.length || transactionsLeft == 0) {
            return 0;
        }
        let key = i+","+canBuy+","+transactionsLeft
        if(memo.has(key)) {
            return memo.get(key)
        }
        let profit1 = 0, profit2 = 0;
        if(canBuy) {
            profit1 = -prices[i] + helper(i+1, false, transactionsLeft, memo);
            profit2 = helper(i+1, true, transactionsLeft, memo);
        } else {
            profit1 = prices[i] + helper(i+1, true, transactionsLeft-1, memo);
            profit2 = helper(i+1, false, transactionsLeft, memo)
        }
        let ans = Math.max(profit1, profit2);
        memo.set(key, ans)
        return ans
    }
};

//chatgpt coverted to 3d array and it got submitted
var maxProfit = function(prices) {
    const n = prices.length;
    // Create a 3D memoization array filled with undefined
    const memo = Array.from({ length: n }, () =>
        Array.from({ length: 2 }, () =>
            Array(3).fill(undefined)
        )
    );

    return helper(0, 1, 2); // canBuy is 1 (true), transactionsLeft is 2

    function helper(i, canBuy, transactionsLeft) {
        if (i === n || transactionsLeft === 0) {
            return 0;
        }
        if (memo[i][canBuy][transactionsLeft] !== undefined) {
            return memo[i][canBuy][transactionsLeft];
        }

        let profit1 = 0, profit2 = 0;
        if (canBuy === 1) {
            profit1 = -prices[i] + helper(i + 1, 0, transactionsLeft);       // Buy
            profit2 = helper(i + 1, 1, transactionsLeft);                    // Skip
        } else {
            profit1 = prices[i] + helper(i + 1, 1, transactionsLeft - 1);    // Sell
            profit2 = helper(i + 1, 0, transactionsLeft);                    // Skip
        }

        memo[i][canBuy][transactionsLeft] = Math.max(profit1, profit2);
        return memo[i][canBuy][transactionsLeft];
    }
};
