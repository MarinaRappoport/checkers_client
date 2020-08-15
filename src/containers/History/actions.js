import { SET_HISTORY_GAMES } from './consts';

export const fetchHistoryGames = () => async (dispatch) => {
    dispatch({ type: SET_HISTORY_GAMES, payload: [{
        "gameId": 36,
        "white": {
            "id": 2,
            "username": "eliyaoo3d2",
            "name": "dasdsadsa",
            "score": 130,
            "available": true
        },
        "black": {
            "id": 1,
            "username": "eliyaoo32",
            "name": "dasdsa",
            "score": 120,
            "available": true
        },
        "winner": "BLACK",
        "timestamp": 1596988252353
    }] });
};
