import { range, find } from 'lodash';

const BLACK = 'black';
const WHITE = 'white';

function parsePlayerColor(color) {
    if (color.toLocaleLowerCase() === WHITE.toLowerCase()) {
        return WHITE;
    }
    if (color.toLocaleLowerCase() === BLACK.toLowerCase()) {
        return BLACK;
    }
    return null;
}

class GameLogicController {
    constructor(username) {
        this._board = [];
        this._selected = [-1, -1];
        this._possibleSquares = [];
        this._playerColor = null;
        this._playerName = username;

        this._loadBoard = this._loadBoard.bind(this);
        this.loadGame = this.loadGame.bind(this);
    }

    loadGame(game) {
        this._playerColor = this._getPlayerColor(game);
        this._loadBoard(game.board);
    }

    _getPlayerColor(game) {
        const { black, white } = game;
        
        if(black.name === this._playerName) {
            return BLACK;
        }
        if(white.name === this._playerName) {
            return WHITE;
        }

        return null;
    }

    _loadBoard(board) {
        const pieces = board.pieces;
        const checkPiecePoint = (piece, i, j) => (
            piece.position.row === (i + 1) && piece.position.column === (j + 1)
        );

        this._board = this._getCleanBoard();   // 8 x 8 board
        for (let i of range(0, 8)) {  // for i=0 to i=7
            for (let j of range(0, 8)) {  // for j=0 to j=7
                const pointPiece = find(pieces, (piece) => checkPiecePoint(piece, i, j));
                if (pointPiece != null) {
                    this._board[i][j] = parsePlayerColor(pointPiece.color);
                }
            }
        }
    }

    _getCleanBoard() {
        const board = [];
        for (let i of range(0, 8)) {
            board.push([]);
            for (let j of range(0, 8)) {
                board[i].push(null);
            }
        }
        return board;
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
        if (!this._canSelectSquare(row, column)) {
            return;
        }

        this._selected = this._calcSelectSquare(row, column);
        this._possibleSquares = this._calcPossibleSquare();
    }

    _canSelectSquare(row, column) {
        return this._board[row][column] === this._playerColor;
    }

    _calcPossibleSquare() {
        const [row, column] = this._selected;
        if (row === -1 || column === -1) {
            return [];
        }

        const _possibleRow = (this._playerColor === WHITE) ? row + 1 : row - 1;
        let possibleSquares = [
            [_possibleRow, column + 1],
            [_possibleRow, column - 1],
        ];

        // Filter the squares which has players on
        possibleSquares = possibleSquares.filter(([i, j]) => this._board[i][j] === null);
        return possibleSquares;
    }

    _calcSelectSquare(row, column) {
        const current = this._selected;
        const selected = [row, column];

        if (current[0] === selected[0] && current[1] === selected[1]) { // If selected current square
            return [-1, -1];
        }

        return selected;
    }
}

export default GameLogicController;