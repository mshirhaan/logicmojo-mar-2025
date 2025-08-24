function getPowerSet(nums) {
    const powerSet = [];
    const totalSubsets = 1 << nums.length; // 2^n subsets

    for (let i = 0; i < totalSubsets; i++) {
        const subset = [];
        for (let j = 0; j < nums.length; j++) {
            if (i & (1 << j)) {
                subset.push(nums[j]);
            }
        }
        powerSet.push(subset);
    }

    return powerSet;
}

// Example usage:
const nums = [1, 2, 3];
const result = getPowerSet(nums);
console.log(result);
