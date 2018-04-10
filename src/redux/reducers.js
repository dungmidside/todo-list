import { combineReducers } from 'redux'
import { TodoReducer } from '../modules/todolist'
/**
 * This place is to register all reducers of the app.
 */

export default combineReducers({
    todo: TodoReducer
});