import {
    cleanBoard, parsePlayerColor, decreasePosition, isPointInList, increasePosition,
    comparePoints, compareJsonPoints, preprocessLegalMoves, jsonPointToArray, arrayPointToJson
} from './CheckerUtils';

class CheckerGame {
    load = (game, playerColor, playerMoveAction) => {
        // Reinit vars
        this._playerColor = parsePlayerColor(playerColor);
        this._currentTurn = parsePlayerColor(game.currentPlayerColor);
        this._legalMoves = preprocessLegalMoves(game.legalMovesCollection);
        this._board = cleanBoard();
        this._selectedSquare = [-1, -1];
        this._selectableSquares = [];
        this._playerMoveAction = playerMoveAction;

        this._loadPieces(game.board.pieces);
    };

    getBoard = () => this._board;

    getSelectableSquares = () => this._selectableSquares;

    getCurrentPlayerColor = () => this._currentTurn;

    getSelectedSquare = () => this._selectedSquare;

    selectSquare = (row, column) => {
        const point = [row, column];

        if(!this._isPlayerTurn()) {
            return;
        }

        if(this._isSelectableSquare(point)) {
            this._moveFromTo(this._selectedSquare, point);

            this._cleanSelectableSquares();
            this._cleanSelectedSquare();
        } else if(this._isCancelingSelected(point)) {
            this._cleanSelectableSquares();
            this._cleanSelectedSquare();
        } else if(this._isSquareOfPlayer(point)) {
            const movesFromPoint = this._allMovesFromPoint(point);
            this._setSelectableSquares(movesFromPoint);
            this._setSelectedSquare(point);
        }
    };

    _moveFromTo = (currentPoint, targetPoint) => {
        const from = increasePosition(arrayPointToJson(currentPoint));
        const to = increasePosition(arrayPointToJson(targetPoint));
        this._playerMoveAction(from, to);
    };

    _isSquareOfPlayer = (point) => {
        const [row, column] = point;
        return this._board[row][column] === this._playerColor;
    }

    _isPlayerTurn = () => this._playerColor === this._currentTurn;

    _isCancelingSelected = (point) => comparePoints(point, this._selectedSquare);   // Is point equals to selected point

    _isSelectableSquare = (point) => isPointInList(this._selectableSquares, point);

    _setSelectedSquare = (value) => this._selectedSquare = value;

    _cleanSelectedSquare = () => this._selectedSquare = [-1,-1];

    _setSelectableSquares = (value) => this._selectableSquares = value;

    _cleanSelectableSquares = () => this._selectableSquares = [];

    _allMovesFromPoint = (point) => {
        const [row, column] = point;
        point = { row, column };

        const posMoves = this._legalMoves.filter(move => compareJsonPoints(move.from, point));
        return posMoves.map(move => jsonPointToArray(move.to));
    };

    _loadPieces = (pieces) => {
        for(let piece of pieces) {
            const position = decreasePosition(piece.position);
            this._board[position.row][position.column] = parsePlayerColor(piece.color);
        }
    };
}

export default CheckerGame;