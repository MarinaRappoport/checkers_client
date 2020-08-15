import { fromJS } from 'immutable';
import { SET_HISTORY_GAMES } from './consts';

const initState = fromJS({
    games: []
});

export default function gameReducer(state = initState, action) {
    switch (action.type) {
        case SET_HISTORY_GAMES:
            return state.set('games', fromJS(action.payload));
        default:
            return state;
    }
}
