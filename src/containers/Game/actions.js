import { SET_SELECT_PIECE, SET_BOARD, SET_SELECTABLE_SQUARES, SET_OPPONENT_COLOR, SET_PLAYER_COLOR, SET_CURRENT_PLAYER_COLOR } from "./consts";
import CheckerGame from '../../controllers/CheckerGame';
import * as AppActions from '../App/actions';
import GameIOController from "../../controllers/GameIOController";

let checkerGame;

const moveAction = (from, to) => {
    GameIOController.move({from, to});
};

export const surrend = () => GameIOController.surrend();

export const loadGame = (gameData, username) => async (dispatch) => {
    if(gameData.error) {
        dispatch(AppActions.enqueueSnackbar({
            message: `התקבלה שגיאה: ${gameData.error}`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error'
            },
        }));
        return;
    }

    const { black } = gameData;
    let userColor = black.name === username ? 'BLACK' : 'WHITE';
    let opponentColor = userColor === 'WHITE' ? 'BLACK' : 'WHITE';

    checkerGame = new CheckerGame();
    checkerGame.load(gameData, userColor, moveAction);

    dispatch({ type: SET_CURRENT_PLAYER_COLOR, payload: checkerGame.getCurrentPlayerColor() });
    dispatch({ type: SET_BOARD, payload: checkerGame.getBoard() });
    dispatch({ type: SET_OPPONENT_COLOR, payload: opponentColor });
    dispatch({ type: SET_PLAYER_COLOR, payload: userColor });
};

export const onSelectSquare = (row, column) => async (dispatch) => {
    checkerGame.selectSquare(row, column);

    dispatch({ type: SET_SELECT_PIECE, payload: checkerGame.getSelectedSquare() });
    dispatch({ type: SET_SELECTABLE_SQUARES, payload: checkerGame.getSelectableSquares() });
};
