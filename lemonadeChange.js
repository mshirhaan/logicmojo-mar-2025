var lemonadeChange = function(bills) {
    let fiveCoins = 0;
    let tenCoins = 0;
    for(let bill of bills) {
        if(bill == 5) {
            fiveCoins++;
        } else if(bill == 10) {
            if(fiveCoins == 0) return false;
            fiveCoins--
            tenCoins++
        } else {
            //Greedy
            if(fiveCoins>=1 && tenCoins>=1) {
                fiveCoins--
                tenCoins--
            } else if(fiveCoins>=3) {
                fiveCoins-=3
            } else {
                return false;
            }
        }
    }

    return true
};
