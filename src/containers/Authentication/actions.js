import AuthController from '../../controllers/AuthController';
import GameIOController from '../../controllers/GameIOController';
import { SET_USER, LOGOUT } from './consts';

export const setUser = (user) => async (dispatch) => {
    dispatch({ type: SET_USER, payload: user });

    GameIOController.connect(user);
};

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });

    AuthController.logout();
};

export const initLogin = () => async (dispatch) => {
    if (!AuthController.isCredentialsSaved()) {
        return;
    }

    const { username, password } = AuthController.getCredentials();
    const user = await AuthController.login({ username, password });
    setUser(user)(dispatch);
};
