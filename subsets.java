class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> trolly = new ArrayList<>();
        helper(nums, 0, new ArrayList(), trolly);
        return trolly;
    }

    public void helper(int[] nums, int i, List<Integer> bag, List<List<Integer>> trolly) {
        if(i == nums.length) {
            trolly.add(new ArrayList<Integer>(bag));
            return;
        }
        bag.add(nums[i]);
        helper(nums, i+1, bag, trolly);
        bag.remove(bag.size()-1);
        helper(nums, i+1, bag, trolly);
    }
}
