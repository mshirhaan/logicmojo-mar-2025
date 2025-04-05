class Solution {
    public int lengthOfLongestSubstring(String s) {
        if(s.length() == 0) return 0;

        Set<Character> set = new HashSet<>();
        int max = 1;

        int i = 0;

        set.add(s.charAt(0));

        int j = 1;

        while(j<s.length()) {
            while(set.contains(s.charAt(j))) {
                set.remove(s.charAt(i));
                i++;
            }
            set.add(s.charAt(j));

            max = Math.max(max, j-i+1);
            j++;
        }
        return max;
    }
}
