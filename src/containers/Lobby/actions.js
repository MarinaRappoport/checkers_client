import UsersController from '../../controllers/UsersController';
import GameIOController from '../../controllers/GameIOController';
import { SET_ALL_USERS } from './consts';

export const fetchAllPlayers = () => async (dispatch) => {
    const users = await UsersController.fetch_all_users();
    dispatch({ type: SET_ALL_USERS, payload: users });
};

export const invitePlayer = (player) => async(dispatch) => {
    GameIOController.invitePlayer(player);
};

export const acceptPlayer = (player) => async(dispatch) => {
    GameIOController.acceptPlayer(player);
};