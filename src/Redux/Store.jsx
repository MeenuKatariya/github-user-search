import { legacy_createStore as createStore } from "redux";
import {reducer} from "./Reducer"

const Store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export {Store}