function subsetsWithDup( nums) {
    nums.sort((a,b)=>a-b)
    let trolly = [[]]
    helper(nums, 0, [], trolly);
    return trolly;
}

function helper(nums, index, bag, trolly) {
    if(index == nums.length) {
        return;
    }

    for(let i = index; i < nums.length; i++) {
        if(i!=index && nums[i] == nums[i-1]) {
            continue;
        }
        bag.push(nums[i])
        trolly.push([...bag])
        helper(nums, i+1, bag, trolly);
        bag.pop();
    }
}
