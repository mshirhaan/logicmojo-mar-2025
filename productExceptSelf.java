//breaks rule with division, TC: O(n), SC: O(1)
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int ans[] = new int[nums.length]; 

        int prod = 1;
        int zeroCount = 0;

        for(int num : nums) {
            if(num == 0) {
                zeroCount++;
            } else {
                prod*= num;
            }
            if(zeroCount == 2) {
                return ans;
            }
        }
        
        for(int i = 0; i<nums.length; i++) {
            if(nums[i] == 0) {
                ans[i] = prod;
            } else {
                if(zeroCount == 1) ans[i] = 0;
                else ans[i] = prod/nums[i];
            }
        }
        return ans;
    }
}

//Optimal, TC: O(n), SC: O(n)
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] before = new int[nums.length];
        int[] after = new int[nums.length];
        int ans[] = new int[nums.length];

        int prod = 1;

        for(int i = 0; i<nums.length; i++) {
            before[i] = prod;
            prod*= nums[i];
        }

        prod = 1;

        for(int i = nums.length-1; i>=0; i--) {
            after[i] = prod;
            prod*= nums[i];
        }

        for(int i = 0; i<nums.length; i++) {
            ans[i] = before[i] * after[i];
        }
        return ans;
    }
}

