import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from '../containers/Authentication/reducer';
import LobbyReducer from '../containers/Lobby/reducer';


export default combineReducers({
    form: formReducer,
    auth: AuthReducer,
    lobby: LobbyReducer
});
