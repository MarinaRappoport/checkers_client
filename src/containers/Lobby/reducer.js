import Immutable from 'immutable';
import { SET_ALL_PLAYERS } from './consts';

const initState = Immutable.fromJS({
    all_users: []
});

export default function authReducer(state = initState, action) {
    switch(action.type) {
        case SET_ALL_PLAYERS:
            return state.set('all_users', Immutable.fromJS(action.payload));
        default:
            return state;
    }
}
