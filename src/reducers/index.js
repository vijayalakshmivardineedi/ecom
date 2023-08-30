import userReducer from './user.reducer'
import authReducers from "./auth.reducers";
import {combineReducers} from 'redux';


const rootReducer=combineReducers({
    auth:authReducers,
    user:userReducer
});
export default rootReducer

