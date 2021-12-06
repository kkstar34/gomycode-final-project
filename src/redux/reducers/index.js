import { combineReducers } from "redux";
import productReducers from "./productReducers";
import selectProductReducers from './selectProductReducers';


const rootReducer = combineReducers({
    allProducts : productReducers,
    product : selectProductReducers,
})

export default rootReducer;