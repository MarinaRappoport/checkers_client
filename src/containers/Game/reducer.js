import { fromJS } from 'immutable';
import { SET_SELECT_PIECE, SET_BOARD } from './consts';

const initState = fromJS({
    board: [],
    opponent: {
        username: 'David'
    },
    selectOptions: [
        [3,0],[3,2],[2,1]
    ],
    selected: []
});

export default function gameReducer(state = initState, action) {
    switch(action.type) {
        case SET_BOARD:
            return state.set('board', fromJS(action.payload));
        case SET_SELECT_PIECE:
            return state.set('selected', fromJS(action.payload));
        default:
            return state;
    }
}
