import AuthController from '../../controllers/AuthController';
import GameController from '../../controllers/GameController';
import { SET_USER } from './consts';

export const setUser = (user) => async (dispatch) => {
    dispatch({ type: SET_USER, payload: user });

    GameController.connect(user.username, dispatch);
};

export const initLogin = () => async (dispatch) => {
    if (!AuthController.isCredentialsSaved()) {
        return;
    }

    const { username, password } = AuthController.getCredentials();
    const user = await AuthController.login({ username, password });
    setUser(user)(dispatch);
};
