var mySqrt = function(x) {
    if(x < 2) return x;

    let minK = 1;

    let maxK = x/2

    let ans;
    while(minK <= maxK) {
        let midK = Math.floor((minK+maxK)/2)
        let product = midK*midK
        if(product == x ) {
            return midK;
        } else if(product>x) {
            maxK = midK-1
        } else {
            ans = midK;
            minK = midK+1
        }
    }
    return ans
};
