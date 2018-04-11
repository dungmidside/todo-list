import { ADD, REMOVE } from '../actions';

const initialState = {
  todoList: []
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD:
      var todoNew = {
        check: false,
        value: action.value
      };
      return {
        ...state,
        todoList: [...state.todoList, todoNew]
      };
    case REMOVE:
      return {
        ...state,
        todoList: state.todoList.filter((todo, index) => index !== action.index)
      }
    default:
      return state;
  }
};