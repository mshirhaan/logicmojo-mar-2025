class Solution {
    public List<List<Integer>> threeSum(int[] nums) {

        List<List<Integer>> res = new ArrayList<>();

        Arrays.sort(nums); //nlogn
        for(int i = 0; i<nums.length-2; i++) {
            if(i>0 && nums[i] == nums[i-1]) continue;

            int left = i + 1;
            int right = nums.length - 1;
            while(left<right) {
                int sum = nums[i] + nums[left] + nums[right];
                if(sum == 0) {
                    res.add(new ArrayList<>(List.of(nums[i], nums[left], nums[right])));
                    left++;
                    right--;
                    while(left<nums.length && nums[left] == nums[left-1]) {
                        left++;
                    }
                    while(right>=0 && nums[right] == nums[right+1]) {
                        right--;
                    }
                } else if(sum>0){
                    right--;
                } else {
                    left++;
                }
            }
        }
        return res;
    }
}
