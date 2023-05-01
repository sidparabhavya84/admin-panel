import { combineReducers } from "redux";
import productReducer from "./product.reducer";
import AuthReducer from './Auth.reducer'

const rootReducer = combineReducers({
  productReducer,AuthReducer
});

export default rootReducer;