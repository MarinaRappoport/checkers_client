import AuthController from '../../controllers/AuthController';
import { SET_USER } from './consts';

export const register = (data) => async (dispatch) => {
    const user = await AuthController.register(data);
    dispatch({ type: SET_USER, payload: user });
};