var sortColors = function(nums) {
    let i = 0;
    while(nums[i] == 0) {
        i++;
    }
    let j = nums.length-1
    while(nums[j] == 2) {
        j--
    }

    let k = i;

    while(k<=j) {
        if(nums[k] == 2) {
            swap(nums, k, j)
            while(nums[j]==2) j--;
        }
        if(nums[k] == 0) {
            swap(nums, k, i)
            i++;
        }
        k++;
    }
    return nums
};

function swap(nums, i , j) {
    let temp = nums[i]
    nums[i]= nums[j]
    nums[j] = temp
}
