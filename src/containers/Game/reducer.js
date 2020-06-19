import { fromJS } from 'immutable';
import { SELECT_PIECE} from './consts';
import GameLogicController from '../../controllers/GameLogicController';

const initState = fromJS({
    board: [
        [null, 'white', null, 'white', null, 'white', null, 'white'],
        ['white', null, 'white', null, 'white', null, 'white', null],
        [null, 'white', null, 'white', null, 'white', null, 'white'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, 'black', null, 'black', null, 'black', null, 'black'],
        ['black', null, 'black', null, 'black', null, 'black', null],
        [null, 'black', null, 'black', null, 'black', null, 'black'],
    ],
    selectOptions: [
        [3,0],[3,2],[2,1]
    ],
    selected: [2,1]
});

export default function gameReducer(state = initState, action) {
    switch(action.type) {
        case SELECT_PIECE:
            const { row, column } = action.payload;
            const current_select = state.get('selected');
            const newSelected = GameLogicController.getSelectedPoints(
                [current_select.get(0), current_select.get(1)],
                [row, column]
            );
            
            return state.set('selected', fromJS(newSelected));
        default:
            return state;
    }
}
