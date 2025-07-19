class Solution {
    knapsack(W, val, wt) {
        // code here
        function helper(i, capacity, memo) {
            if(i>=wt.length) return 0;
            
            if(memo[i][capacity]!= undefined) {
                return memo[i][capacity];
            }
            
            let take = 0;
            if(capacity >= wt[i]) {
                take = val[i] + helper(i+1, capacity-wt[i], memo);
            }
            let notTake = helper(i+1, capacity, memo);
            memo[i][capacity] = Math.max(take, notTake);
            return memo[i][capacity];
        }
        
        let memo = []
        for(let i = 0; i<val.length; i++) {
            memo[i] = []
        }
        return helper(0, W,memo);
    }
}
