import Immutable from 'immutable';

const initState = Immutable.fromJS({
    
});

export default function authReducer(state = initState, action) {
    const { type } = action;
    
    switch(type) {
        default:
            return state;
    }
}
