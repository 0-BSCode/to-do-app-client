import { combineReducers } from "redux";
import taskReducer from './tasks';

export default combineReducers({
    tasks: taskReducer
});