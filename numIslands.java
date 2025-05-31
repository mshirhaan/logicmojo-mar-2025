class Solution {

    public void dfs(char[][] grid,int row,int col){
        int n=grid.length;
        int m=grid[0].length;
        int[] rdir={-1,0,1};
        int[] cdir={-1,0,1};

        if(row<0 || col<0 || row>=n || col>=m || grid[row][col]=='0'){
            return;
        }

        grid[row][col]='0';
        // Calling for four direction:
        dfs(grid,row-1,col);
        dfs(grid,row+1,col);
        dfs(grid,row,col-1);
        dfs(grid,row,col+1);

    }
    public int numIslands(char[][] grid) {
        int n=grid.length;
        int m=grid[0].length;
        int count=0;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]=='1'){
                    dfs(grid,i,j);
                    count++;
                }
            }
        }

        return count;
    }
}




//C++ Laksh
void bfs(int i, int j, vector<vector<char>>& grid, int rows, int cols) {
    grid[i][j] = '3'; // visited
    queue<pair<int, int>> q;
    q.push({i, j});

    while (!q.empty()) {
        pair<int, int> p = q.front();
        q.pop();
        i = p.first;
        j = p.second;

        if (i > 0 && grid[i - 1][j] == '1') {
            grid[i - 1][j] = '3';
            q.push({i - 1, j});
        }
        if (j > 0 && grid[i][j - 1] == '1') {
            grid[i][j - 1] = '3';
            q.push({i, j - 1});
        }
        if (i < rows - 1 && grid[i + 1][j] == '1') {
            grid[i + 1][j] = '3';
            q.push({i + 1, j});
        }
        if (j < cols - 1 && grid[i][j + 1] == '1') {
            grid[i][j + 1] = '3';
            q.push({i, j + 1});
        }
    }
}
