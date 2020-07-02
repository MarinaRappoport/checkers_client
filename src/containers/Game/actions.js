import { SET_SELECT_PIECE, SET_BOARD, SET_SELECTABLE_SQUARES } from "./consts";
import GameLogicController from '../../controllers/GameLogicController';

let gameLogicController;

export const loadGame = (gameData, username) => async (dispatch) => {
    gameLogicController = new GameLogicController(username);
    gameLogicController.loadGame(gameData);
    
    dispatch({
        type: SET_BOARD,
        payload: gameLogicController.getBoard()
    });
};

export const onSelectPiece = (row, column) => async (dispatch) => {
    gameLogicController.selectSquare(row, column);

    dispatch({
        type: SET_SELECT_PIECE,
        payload: gameLogicController.getSelectedSquare()
    });

    dispatch({
        type: SET_SELECTABLE_SQUARES,
        payload: gameLogicController.getSelectableSquares()
    });
};