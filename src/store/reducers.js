import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from '../containers/Authentication/reducer';
import LobbyReducer from '../containers/Lobby/reducer';
import GameReducer from '../containers/Game/reducer';
import AppReducer from '../containers/App/reducer';
import HistoryReducer from '../containers/History/reducer';


export default combineReducers({
    form: formReducer,
    auth: AuthReducer,
    lobby: LobbyReducer,
    game: GameReducer,
    app: AppReducer,
    history: HistoryReducer,
});
