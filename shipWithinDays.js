var shipWithinDays = function(weights, days) {
    let minCapacity = Math.max(...weights);

    let maxCapacity = weights.reduce((carry, num)=> carry+num)

    let ansCapacity = maxCapacity;

    while(minCapacity <= maxCapacity) {
        let midCapacity = Math.floor((minCapacity+maxCapacity)/2)
        let totalDays = findDays(midCapacity);
        if(totalDays <= days) {
            maxCapacity = midCapacity-1
            ansCapacity = midCapacity;
        } else {
            minCapacity = midCapacity+1
        }
    }

    function findDays(capacity) {
        let days = 0;
        let i = 0
        while(i<weights.length) {
            days++;
            let remCapacity = capacity;
            while(i<weights.length && remCapacity>0 && weights[i]<=remCapacity) {
                remCapacity-=weights[i]
                i++;
            }
        }
        return days
    }
    return ansCapacity;
};
