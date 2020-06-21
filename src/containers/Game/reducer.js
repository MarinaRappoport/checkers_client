import { fromJS } from 'immutable';
import { SET_SELECT_PIECE, SET_BOARD, SET_POSSIBLE_SQUARES } from './consts';

const initState = fromJS({
    board: [],
    opponent: {
        username: 'David'
    },
    possibleSquares: [],
    selected: []
});

export default function gameReducer(state = initState, action) {
    switch(action.type) {
        case SET_BOARD:
            return state.set('board', fromJS(action.payload));
        case SET_SELECT_PIECE:
            return state.set('selected', fromJS(action.payload));
        case SET_POSSIBLE_SQUARES:
            return state.set('possibleSquares', fromJS(action.payload));
        default:
            return state;
    }
}
