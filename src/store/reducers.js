import { combineReducers } from 'redux';
import AuthReducer from '../containers/Authentication/reducer';


export default combineReducers({
    auth: AuthReducer
});
