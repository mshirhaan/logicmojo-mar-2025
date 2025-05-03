function combinationSum(nums, target) {
    let trolly = []
    helper(0, 0, [], trolly);
    return trolly;

    function helper(i, sum, bag, trolly) {
        if(sum==target) {
            trolly.push([...bag])
            return
        }
        if(i == nums.length || sum > target) {
            return;
        }

        bag.push(nums[i]);
        helper(i, sum+nums[i], bag, trolly);
        bag.pop();
        helper(i+1, sum, bag, trolly);
    }
};
