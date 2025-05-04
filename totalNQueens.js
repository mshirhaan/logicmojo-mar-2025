/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
    let count = 0;
    helper(0, []);
    return count;

    function helper(row, board, result) {
        if(row == n) {
            count++;
            return;
        }
        for(let col = 0; col<n; col++) {
            if(canIPlaceQueen(board, row, col, n)) {
                board[row] = col;
                helper(row+1, board);
            }
        }
    }
};


//board = [1,3,2] => index is row, value is column

function canIPlaceQueen(board, row, col, n) {
    
    // check for upper column and check for upper right diagonal and check for upper left diagonal
    for(let currRow = 0; currRow<row; currRow++) {
        if(board[currRow] == col) {
            return false;
        }
        if((col + (row - currRow)) < n && board[currRow] == col + (row - currRow)) {
            return false;
        }
        if((col - (row - currRow)) >=0 && board[currRow] == col - (row - currRow)) {
            return false;
        }
    }

    return true
}
