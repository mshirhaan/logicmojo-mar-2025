var orangesRotting = function (grid) {
    let queue = []
    let orangeFound = false;

    let m = grid.length, n = grid[0].length;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] == 2) {
                queue.push({ row: row, col: col })
            } else if (grid[row][col] == 1) {
                orangeFound = true;
            }
        }
    }

    if(!orangeFound) {
        return 0;
    }

    let directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]

    let time = -1;
    
    while (queue.length) {
        let snapshotSize = queue.length;
        while (snapshotSize--) {
            let rottenOrange = queue.shift();
            for (let [row, col] of directions) {
                let nextRow = rottenOrange.row + row;
                let nextCol = rottenOrange.col + col;
                if (nextRow >= 0 && nextRow < m && nextCol >= 0
                    && nextCol < n && grid[nextRow][nextCol] == 1) {
                        grid[nextRow][nextCol] = 2;
                        queue.push({row: nextRow, col: nextCol});
                }
            }
        }
        time++;
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] == 1) {
                return -1;
            }
        }
    }
    return time;
};
