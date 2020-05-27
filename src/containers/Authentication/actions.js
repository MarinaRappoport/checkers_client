import AuthController from '../../controllers/AuthController';
import { SET_USER } from './consts';

export const setUser = (user) => async (dispatch) => {
    dispatch({ type: SET_USER, payload: user });
};

export const initLogin = () => async (dispatch) => {
    if (!AuthController.isCredentialsSaved()) {
        return;
    }

    const { username, password } = AuthController.getCredentials();
    const user = await AuthController.login({ username, password });
    setUser(user)(dispatch);
};
