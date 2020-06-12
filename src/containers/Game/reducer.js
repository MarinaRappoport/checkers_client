import Immutable, { fromJS } from 'immutable';
import { ADD_GAME_INVITATION } from './consts';

const initState = Immutable.fromJS({
    invitations: []
});

export default function authReducer(state = initState, action) {
    switch(action.type) {
        case ADD_GAME_INVITATION:
            return (
                state.update('invitations', arr => arr.push(fromJS(action.payload)))
            );
        default:
            return state;
    }
}
