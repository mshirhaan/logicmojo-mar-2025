var minEatingSpeed = function(piles, h) {
    let minK = 1;

    let maxK = piles.reduce((carry, num)=> num>carry?num:carry)

    let ansK = maxK;

    while(minK <= maxK) {
        let midK = Math.floor((minK+maxK)/2)
        let hrs = piles.reduce((carry, num)=> carry + Math.ceil(num/midK), 0)
        if(hrs <= h) {
            maxK = midK-1
            ansK = midK;
        } else {
            minK = midK+1
        }
    }
    return ansK;
};
