import { ADD } from '../actions';

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
    default:
      return state;
  }
};