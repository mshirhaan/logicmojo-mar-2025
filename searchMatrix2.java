public class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length - 1;
        int n = matrix[0].length - 1;

        int currRow = m;
        int currCol = 0;

        while (currRow >= 0 && currCol <= n) {
            if (matrix[currRow][currCol] == target) {
                return true;
            }
            if (target < matrix[currRow][currCol]) {
                currRow--;
            } else {
                currCol++;
            }
        }

        return false;
    }
}
