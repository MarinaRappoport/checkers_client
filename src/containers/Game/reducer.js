import { fromJS } from 'immutable';
import { SET_SELECT_PIECE, SET_BOARD, SET_SELECTABLE_SQUARES, SET_PLAYER_COLOR, SET_OPPONENT_COLOR } from './consts';

const initState = fromJS({
    board: [],
    opponent: {
        username: 'David',
        color: '',
    },
    yourself: {
        color: '',
    },
    selectableSquares: [],
    selected: []
});

export default function gameReducer(state = initState, action) {
    switch(action.type) {
        case SET_BOARD:
            return state.set('board', fromJS(action.payload));
        case SET_SELECT_PIECE:
            return state.set('selected', fromJS(action.payload));
        case SET_SELECTABLE_SQUARES:
            return state.set('selectableSquares', fromJS(action.payload));
        case SET_PLAYER_COLOR:
            return state.setIn(['yourself','color'], action.payload);
        case SET_OPPONENT_COLOR:
            return state.setIn(['opponent','color'], action.payload);
        default:
            return state;
    }
}
