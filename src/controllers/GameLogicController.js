const BLACK = 'black';
const WHITE = 'white';

class GameLogicController {
    constructor(playerColor) {
        this._board = this.initBoard();
        this._selected = [-1,-1];
        this._possibleSquares = [];
        this._playerColor = playerColor;
    }

    initBoard() {
        return [
            [null, WHITE, null, WHITE, null, WHITE, null, WHITE],
            [WHITE, null, WHITE, null, WHITE, null, WHITE, null],
            [null, WHITE, null, WHITE, null, WHITE, null, WHITE],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, BLACK, null, BLACK, null, BLACK, null, BLACK],
            [BLACK, null, BLACK, null, BLACK, null, BLACK, null],
            [null, BLACK, null, BLACK, null, BLACK, null, BLACK],
        ];
    }

    getBoard() {
        return this._board;
    }

    getSelectedSquare() {
        return [...this._selected];
    }

    getPossibleSquares() {
        return this._possibleSquares;
    }

    selectSquare(row, column) {
        if(!this._canSelectSquare(row, column)) {
            return;
        }

        this._selected = this._calcSelectSquare(row, column);
        this._possibleSquares = this._calcPossibleSquare(row, column);
    }

    _canSelectSquare(row, column) {
        return this._board[row][column] === this._playerColor;
    }

    _calcPossibleSquare(row, column) {
        const _possibleRow = (this._playerColor === WHITE) ? row + 1 : row - 1;
        return [
            [_possibleRow, column + 1],
            [_possibleRow, column - 1],
        ];
    }

    _calcSelectSquare(row, column) {
        const current  = this._selected;
        const selected = [row, column];

        if(current[0] === selected[0] && current[1] === selected[1]) { // If selected current square
            return [-1,-1];
        }

        return selected;
    }
}

export default GameLogicController;