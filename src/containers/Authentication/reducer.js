import Immutable from 'immutable';
import { SET_USER, LOGOUT } from './consts';

const initState = Immutable.fromJS({
    isLogin: false,
    user: null
});

export default function authReducer(state = initState, action) {
    switch(action.type) {
        case SET_USER:
            return (
                state
                    .set('isLogin', true)
                    .set('user', Immutable.fromJS(action.payload))
            );
        case LOGOUT:
            return state.set('isLogin', false).set('user', null);
        default:
            return state;
    }
}
