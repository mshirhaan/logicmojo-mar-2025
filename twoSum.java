//Naive - TC: O(n2), SC: O(1)
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i = 0; i<nums.length-1; i++) {
            for(int j = i+1; j <nums.length; j++) {
                if(nums[i]+nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return null;
    }
}

//TC: O(n)
//SC: O(n)
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i<nums.length;i++) {
            if(map.get(target - nums[i])!=null) {
                return new int[]{i, map.get(target - nums[i])};
            }
            map.put(nums[i], i);
        }
        return null;
    }
}
