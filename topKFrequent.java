class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();

        // Counting frequencies of each number
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

         Map<Integer, List<Integer>> flippedMap = new HashMap<>();

        // Flipping the map: key = frequency, value = list of numbers with that frequency
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int key = entry.getKey();
            int value = entry.getValue();

            flippedMap.computeIfAbsent(value, j -> new ArrayList<>()).add(key);
        }

        int ans[] = new int[k];
        int curr = 0;

        for(int count = nums.length; count>0; count--) {
            boolean flagToStop = false;
            if(flippedMap.containsKey(count)) {
                for(int num : flippedMap.get(count)) {
                    ans[curr] = num;
                    curr++;

                    if(curr == k) {
                        flagToStop = true;
                        break;
                    }
                }
            }
            if(flagToStop) {
                break;
            }   
        }
        
        return ans;
    }
}
