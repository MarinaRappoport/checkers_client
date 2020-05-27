import Immutable from 'immutable';
import { SET_ALL_USERS } from './consts';

const initState = Immutable.fromJS({
    allUsers: []
});

export default function authReducer(state = initState, action) {
    switch(action.type) {
        case SET_ALL_USERS:
            return state.set('allUsers', Immutable.fromJS(action.payload));
        default:
            return state;
    }
}
