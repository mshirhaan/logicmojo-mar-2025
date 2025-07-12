let memo = {}

function targetSum(arr, target) {

    return helper(0, target, memo);

    function helper(index, target, memo) {
        if(memo[index+','+target]) {
            return memo[index+','+target]
        }

        if (target == 0) {
            return [[]];
        }

        if (index == arr.length || target < 0) {
            return [];
        }

        let leftTrolly = helper(index + 1, target - arr[index], memo);
        let rightTrolly = helper(index + 1, target, memo);

        memo[index+','+target] = [];

        for(let bag of leftTrolly) {
            memo[index+','+target].push([...bag, arr[index]])
        }
        for(let bag of rightTrolly) {
            memo[index+','+target].push([...bag])
        }
        return  memo[index+','+target];
    }
}

let result = targetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 4,6,3,8,1,2,3,4,5,1,2,3,4,40], 70);
console.log(result);


//Tabulation
 let table = []
function targetSum(arr, target) {
    let lastElementIndex = arr.length-1

    for(let i = 0; i<arr.length; i++) {
        table[i] = [];
    }

    for(let i = 0; i<arr.length; i++) {
        table[i][0] = [[]];
    }
    for(let i = 1; i<=target; i++) {
        table[lastElementIndex][i] = []
    }
    table[lastElementIndex][arr[lastElementIndex]] = [[arr[lastElementIndex]]];

    for(let i = lastElementIndex-1; i>=0; i--) {
        for(let j = 1; j<=target; j++) {
            //2 ways
            //1 is sub ur number from target ask next row for that subtracted number
            let newTrolly = []
            let sum = j - arr[i]
            if(sum >= 0) {
                let rightTrolly = table[i+1][sum]
                for(let bag of rightTrolly) {
                    let newBag = [...bag, arr[i]]
                    newTrolly.push(newBag);
                }
            }
            let leftTrolly = table[i+1][j]
            for(let bag of leftTrolly) {
                let newBag = [...bag]
                newTrolly.push(newBag);
            }
            table[i][j] = newTrolly
        }
    }
    return table[0][target]
}

let result = targetSum([1,2,3,4,5], 10);
console.log(result);



