var exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (helper(i, j, board, word, new Set())) {
                return true;
            }
        }
    }
    return false;

    function helper(row, col, board, word, visited) {
        if (word.length === 0) return true;
        if (
            row < 0 || row >= board.length ||
            col < 0 || col >= board[0].length ||
            visited.has(row + "," + col) ||
            board[row][col] !== word[0]
        ) {
            return false;
        }

        visited.add(row + "," + col);

        for (let [rowAdd, colAdd] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            if (helper(row + rowAdd, col + colAdd, board, word.slice(1), visited)) {
                return true;
            }
        }

        visited.delete(row + "," + col);
        return false;
    }
};
