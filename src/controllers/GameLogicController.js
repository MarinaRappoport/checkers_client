class GameLogicController {
    constructor() {
        this._board = this.initBoard();
        this._selected = [-1,-1];
    }

    initBoard() {
        return [
            [null, 'white', null, 'white', null, 'white', null, 'white'],
            ['white', null, 'white', null, 'white', null, 'white', null],
            [null, 'white', null, 'white', null, 'white', null, 'white'],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 'black', null, 'black', null, 'black', null, 'black'],
            ['black', null, 'black', null, 'black', null, 'black', null],
            [null, 'black', null, 'black', null, 'black', null, 'black'],
        ];
    }

    getBoard() {
        return this._board;
    }

    getSelectedSquare() {
        return [...this._selected];
    }

    selectSquare(row, column) {
        const current  = this._selected;
        const selected = [row, column];

        if(current[0] === selected[0] && current[1] === selected[1]) { // If selected current square
            this._selected = [-1,-1];
        }

        this._selected = selected;
    }
}


export default GameLogicController;