function targetSumInfiniteOneAnswer(nums, target) {
    let trolly = []
    helper(0, 0, [], trolly);
    return trolly;

    function helper(i, sum, bag, trolly) {
        if(sum==target) {
            trolly.push([...bag])
            return true
        }
        if(i == nums.length || sum > target) {
            return false;
        }

        bag.push(nums[i]);
        let left = helper(i, sum+nums[i], bag, trolly);
        if(left == true) {
            return true;
        }
        bag.pop();
        return helper(i+1, sum, bag, trolly);
    }
}

targetSumInfiniteOneAnswer([2,3,6,7],7)
