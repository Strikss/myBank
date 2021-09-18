import { combineReducers, createStore } from "redux";
import CurrencyReducer from "./CurrencyReducer";


 let reducers=combineReducers({
     currencyPage:CurrencyReducer,
 })
 let store = createStore(reducers);


 export default store;