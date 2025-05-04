/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = []
    helper(0, [], result);
    return result;

    function helper(row, board, result) {
        if(row == n) {
            result.push(generateBoard(board));
            return;
        }
        for(let col = 0; col<n; col++) {
            if(canIPlaceQueen(board, row, col, n)) {
                board[row] = col;
                helper(row+1, board, result);
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

//board = [1,3,2] => index is row, value is column
function generateBoard(board) {
    let resultBoard = [];
    for(let row = 0; row<board.length; row++) {
        let str = '';
        for(let col = 0; col<board.length; col++) {
            if(board[row] == col) {
                str+='Q';
            } else {
                str+='.'
            }
        }
        resultBoard.push(str);
    }
    return resultBoard
}
