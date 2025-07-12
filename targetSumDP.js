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

