//Bruteforce
class Solution {
    public int trap(int[] height) {
        int waterCount = 0;
        for(int i = 0; i<height.length; i++) {
            int biggestLeft = findBiggestLeft(height, i);
            int biggestRight = findBiggestRight(height, i);

            if(biggestLeft > height[i] && biggestRight > height[i]) {
                waterCount+= Math.min(biggestLeft, biggestRight) - height[i];
            }
        }
        return waterCount;
    }

    private int findBiggestLeft(int[] height, int index) {
        int ans = 0;
        for(int i = 0; i<index; i++) {
            if(height[i] > ans) {
                ans = height[i];
            }
        }
        return ans;
    }

    private int findBiggestRight(int[] height, int index) {
        int ans = 0;
        for(int i = index+1; i<height.length; i++) {
            if(height[i] > ans) {
                ans = height[i];
            }
        }
        return ans;
    }
}

//Optimal
class Solution {
    public int trap(int[] height) {
        int waterCount = 0;
        int length = height.length;
        int[] biggestLeft = new int[length];
        int[] biggestRight = new int[length];
        
        int tempBigLeft = 0;
        int tempBigRight = 0;

        for(int i = 0; i < length; i++) {
            biggestLeft[i] = tempBigLeft;
            tempBigLeft = Math.max(tempBigLeft, height[i]);

            biggestRight[length-1-i] = tempBigRight;
            tempBigRight = Math.max(tempBigRight, height[length-1-i]);
        }

        for(int i = 0; i < length; i++) {
            if(Math.min(biggestLeft[i], biggestRight[i]) > height[i]) {
                waterCount+= Math.min(biggestLeft[i], biggestRight[i]) - height[i];
            }
        }
        return waterCount;
    }
}
