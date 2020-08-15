import { SET_HISTORY_GAMES } from './consts';
import UsersController from '../../controllers/UsersController';

export const fetchHistoryGames = (userId) => async (dispatch) => {
    const games = await UsersController.get_history(userId);
    dispatch({ type: SET_HISTORY_GAMES, payload: games });
};
