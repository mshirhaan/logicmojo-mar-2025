class Solution {
    public int missingNumber(int[] nums) {
        int xor = 0;

        for(int i = 0; i<=nums.length; i++) {
            xor=xor^i;
        }

        for(int i = 0; i<nums.length; i++) {
            xor=xor^nums[i];
        }
        return xor;
    }
}


//tricky approach
class Solution {
    public int missingNumber(int[] nums) {
        int temp = -1;

        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == 0) continue;

            int index = Math.abs(nums[i])-1;

            if(nums[index] == 0) {
                temp = Math.abs(nums[i]);
            } else {
                nums[index] = nums[index] * -1;
            }
        }

        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == 0 && temp == i+1) {
                continue;
            }
            if(nums[i]>=0) {
                return i+1;
            }
        }

        return 0;
    }
}
