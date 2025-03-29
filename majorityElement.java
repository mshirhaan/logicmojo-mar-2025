//Brute force. TC: O(n2), SC: O(1)
class Solution {
    public int majorityElement(int[] nums) {
        int majority = 0;
        int count = 0;

        for (int i = 0; i < nums.length; i++) {
            int tempCount = 1;
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] == nums[i]) {
                    tempCount++;
                }
            }

            if (tempCount > count) {
                count = tempCount;
                majority = nums[i];
            }
        }

        return majority;
    }
}

//Boyre-moore. TC: O(n), SC: O(1)
class Solution {
    public int majorityElement(int[] nums) {
        int throne = nums[0];
        int count = 1;

        for(int i = 1; i < nums.length; i++) {
            if(count == 0) {
                throne = nums[i];
                count = 1;
            }
            else if(throne == nums[i]) {
                count++;
            } else {
                count--;
            }
        }

        return throne;
    }
}
