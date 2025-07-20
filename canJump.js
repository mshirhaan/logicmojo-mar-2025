var canJump = function(nums) {
    return helper(0)

    function helper(i, memo ={}) {
        if(i == nums.length-1) {
            return true;
        }
        if(i >= nums.length) {
            return false;
        }

        if(memo[i]!=undefined) {
            return memo[i]
        }

        let maxJumpPossible = nums[i]

        for(let j = 1; j<=maxJumpPossible; j++) {
            if(helper(i+j, memo)) {
                memo[i] = true;
                return true;
            }
        }
        memo[i] = false;
        return false;
    }
};
