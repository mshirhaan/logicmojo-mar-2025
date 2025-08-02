/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    function binSearch() {
        let first = 0;
        let last = nums.length;

        let ans1 = -1;

        while (first <= last) {
            let mid = Math.floor((first + last) / 2)
            if (nums[mid] == target && nums[mid - 1] != target) {
                ans1 = mid
                break
            } else if (nums[mid] >= target) {
                last = mid - 1
            } else {
                first = mid + 1
            }
        }

        let ans2 = -1;
        first = 0;
        last = nums.length;

        while (first <= last) {
            let mid = Math.floor((first + last) / 2)
            if (nums[mid] == target && nums[mid + 1] != target) {
                ans2 = mid
                break
            } else if (nums[mid] <= target) {
                first = mid + 1
            } else {
                last = mid - 1
            }
        }

        return [ans1, ans2]
    }

    return binSearch();


};
