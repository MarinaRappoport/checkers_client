import { SET_SELECT_PIECE, SET_BOARD } from "./consts";
import GameLogicController from '../../controllers/GameLogicController';

const gameLogicController = new GameLogicController();

export const initGame = () => {
    return {
        type: SET_BOARD,
        payload: gameLogicController.getBoard()
    };
}

export const onSelectPiece = (row, column) => {
    gameLogicController.selectSquare(row, column);

    return {
        type: SET_SELECT_PIECE,
        payload: gameLogicController.getSelectedSquare()
    };
};