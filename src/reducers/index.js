import userReducer from './user.reducer'
import authReducers from "./auth.reducers";
import {combineReducers} from 'redux';
import {categoryReducers} from './category.reducer'
import {productReducers} from './product.reducer'
import {orderReducers} from './order.reducer'
const rootReducer=combineReducers({
    auth:authReducers,
    user:userReducer,
    category:categoryReducers,
    order:orderReducers,
    product:productReducers
});
export default rootReducer

