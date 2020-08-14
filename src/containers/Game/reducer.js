import { fromJS } from 'immutable';
import { SET_SELECT_PIECE, SET_BOARD, SET_SELECTABLE_SQUARES, SET_PLAYER_COLOR, SET_OPPONENT_COLOR, SET_CURRENT_PLAYER_COLOR, SET_IS_GAME_OVER, SET_OPPONENT_NICKNAME, SET_WINNER_USERNAME } from './consts';

const initState = fromJS({
    board: [],
    opponent: {
        username: '',
        color: '',
    },
    player: {
        color: '',
    },
    currentPlayer: {
        color: ''
    },
    isGameOver: false,
    winnerUsername: '',
    selectableSquares: [],
    selected: []
});

export default function gameReducer(state = initState, action) {
    switch (action.type) {
        case SET_BOARD:
            return state.set('board', fromJS(action.payload));
        case SET_SELECT_PIECE:
            return state.set('selected', fromJS(action.payload));
        case SET_SELECTABLE_SQUARES:
            return state.set('selectableSquares', fromJS(action.payload));
        case SET_PLAYER_COLOR:
            return state.setIn(['player', 'color'], action.payload);
        case SET_OPPONENT_COLOR:
            return state.setIn(['opponent', 'color'], action.payload);
        case SET_CURRENT_PLAYER_COLOR:
            return state.setIn(['currentPlayer', 'color'], action.payload);
        case SET_IS_GAME_OVER:
            return state.set('isGameOver', action.payload);
        case SET_OPPONENT_NICKNAME:
            return state.setIn(['opponent', 'username'], action.payload);
        case SET_WINNER_USERNAME:
            return state.set('winnerUsername', action.payload);
        default:
            return state;
    }
}
