function rob(nums) {
  const memo = {}
  return helper(nums, 0, memo, false);
}

function helper(nums, i, memo, taken) {
  if (i >= nums.length) return 0;

  if (memo[i+','+taken] !== undefined) return memo[i+','+taken];

  if (i < nums.length - 1) {
    memo[i+','+taken] = Math.max(
      nums[i] + helper(nums, i + 2, memo, i === 0 || taken),
      helper(nums, i + 1, memo, taken)
    );
  } else {
    if (!taken) {
      memo[i+','+taken] = Math.max(
        nums[i] + helper(nums, i + 2, memo, i === 0 || taken),
        helper(nums, i + 1, memo, taken)
      );
    } else {
      memo[i+','+taken] = 0
    }
  }

  return  memo[i+','+taken];
}
