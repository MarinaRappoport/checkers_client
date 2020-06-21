import { SET_SELECT_PIECE, SET_BOARD, SET_POSSIBLE_SQUARES } from "./consts";
import GameLogicController from '../../controllers/GameLogicController';

let gameLogicController = new GameLogicController('white');;

export const initGame = () => async (dispatch) => {
    dispatch({
        type: SET_BOARD,
        payload: gameLogicController.getBoard()
    });
}

export const onSelectPiece = (row, column) => async (dispatch) => {
    gameLogicController.selectSquare(row, column);

    dispatch({
        type: SET_SELECT_PIECE,
        payload: gameLogicController.getSelectedSquare()
    });

    dispatch({
        type: SET_POSSIBLE_SQUARES,
        payload: gameLogicController.getPossibleSquares()
    });
};