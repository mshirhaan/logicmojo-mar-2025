class Solution {
    public int longestConsecutive(int[] arr) {
        if(arr.length == 0) return 0;

        Set<Integer> set = new HashSet<>();

        for(int num : arr) {
            set.add(num);
        }

        int max = 1;

        for(int i = 0; i< arr.length; i++) {
            
            int curr = arr[i];
            int prev = curr-1;
            if(!set.contains(prev)) {
                int next = curr+1;
                int currMax = 1;
                while(set.contains(next)) {
                    currMax++;
                    next++;
                }
                max = Math.max(max, currMax);
            }
        }
        return max;
    }
}
