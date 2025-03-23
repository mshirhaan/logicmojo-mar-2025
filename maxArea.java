//Brute force
class Solution {
    public int maxArea(int[] height) {
        int max = Integer.MIN_VALUE;
        for(int i = 0; i<height.length; i++) {
            for(int j = i+1; j<height.length; j++) {
                int area = (j-i) * Math.min(height[i], height[j]);
                max = Math.max(max, area);
            }
        }
        return max;
    }
}

//Optimal
class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length-1;

        int ans = Integer.MIN_VALUE;

        while(left<right) {
            int width = right - left;
            int tall = Math.min(height[left], height[right]);
            int area = width*tall;

            ans = Math.max(ans, area);

            if(height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return ans;
    }
}
