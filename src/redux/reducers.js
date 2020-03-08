import { combineReducers } from 'redux'
import { TodoReducer } from '../modules/todo'
/**
 * This place is to register all reducers of the app.
 */
export default combineReducers({
    todo: TodoReducer
});