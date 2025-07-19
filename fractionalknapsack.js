class Solution {
    fractionalknapsack(val, wt, capacity) {
        // code here
        let valsPerWeights = []
        
        for(let i =0; i<val.length; i++) {
            valsPerWeights[i] = {index: i, val: val[i]/wt[i]}
        }
        
        valsPerWeights.sort((a,b)=>b.val - a.val)
        
        let profit = 0;
        
        for(let i =0; i<val.length; i++) {
            let weightToSubtract = Math.min(capacity,wt[valsPerWeights[i].index])
            profit+= valsPerWeights[i].val*weightToSubtract
            capacity-= weightToSubtract
        }
        
        return profit;
    }
}
