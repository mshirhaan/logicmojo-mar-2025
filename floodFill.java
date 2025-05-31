class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
   
         helper(image, sr, sc, color, image[sr][sc]);
        return image;
    }

    public void helper(int[][] image, int row, int col, int color, int originalColor) {
        int rowSize = image.length;
        int colSize = image[0].length;
        image[row][col] = color;
        int directions[][] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

        for(int direction[] : directions) {
            int dRow = direction[0];
            int dCol = direction[1];

            int newRow = row + dRow;
            int newCol = col + dCol;
            if(newRow >= 0 && newRow < rowSize && newCol >= 0 && newCol <colSize && image[newRow][newCol] == originalColor && image[newRow][newCol] != color ) {
                helper(image, row+dRow, col+dCol, color, originalColor);
            }
        }
    }
}
