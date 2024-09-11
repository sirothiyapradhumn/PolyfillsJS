// https://leetcode.com/problems/valid-sudoku

var isValidSudoku = function(board) {
    const seenSet = new Set();

    for(let i = 0; i<9; i++) { // row
        for(let j = 0; j<9; j++) { // col
            const cellval = board[i][j];
            if(cellval !== '.') {
                const subBox = `SubBox ${Math.floor(i/3) * 3 + Math.floor(j/3)}-${cellval}`;
                const row = `Row ${i}-${cellval}`;
                const column = `Col ${j}-${cellval}`;

                if(seenSet.has(subBox) || seenSet.has(row) || seenSet.has(column)) {
                return false;
                }

            
                seenSet.add(subBox);
                seenSet.add(row);
                seenSet.add(column);
            }
        }
    }

    return true;
};