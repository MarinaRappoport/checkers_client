import { fromJS } from 'immutable';
import { } from './consts';

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
    ]
});

export default function authReducer(state = initState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
