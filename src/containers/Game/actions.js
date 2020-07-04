import { SET_SELECT_PIECE, SET_BOARD, SET_SELECTABLE_SQUARES, SET_OPPONENT_COLOR, SET_PLAYER_COLOR } from "./consts";
import GameLogicController from '../../controllers/GameLogicController';

let gameLogicController;

export const loadGame = (gameData, username) => async (dispatch) => {
    const { black } = gameData;
    let userColor = black.name === username ? 'BLACK' : 'WHITE';
    let opponentColor = userColor === 'WHITE' ? 'BLACK' : 'WHITE';

    gameLogicController = new GameLogicController(username);
    gameLogicController.loadGame(gameData, userColor);
    
    dispatch({
        type: SET_BOARD,
        payload: gameLogicController.getBoard()
    });
    dispatch({ type: SET_OPPONENT_COLOR, payload: opponentColor });
    dispatch({ type: SET_PLAYER_COLOR, payload: userColor });
};

export const onSelectSquare = (row, column) => async (dispatch) => {
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