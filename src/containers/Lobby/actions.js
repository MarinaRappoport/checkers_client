import UsersController from '../../controllers/UsersController';
import { SET_ALL_PLAYERS } from './consts';

export const fetchAllPlayers = () => async (dispatch) => {
    const users = await UsersController.fetch_all_users();
    dispatch({ type: SET_ALL_PLAYERS, payload: users });
};
