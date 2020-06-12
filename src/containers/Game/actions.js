import { ADD_GAME_INVITATION } from './consts';

export const addInvitation = (invitation) => async (dispatch) => {
    dispatch({ type: ADD_GAME_INVITATION, payload: invitation });
};
