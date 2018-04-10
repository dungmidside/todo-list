import { ADD } from '../actions/index';

const initialState = {
  todoList: ['todo-001', 'todo-002', 'todo-003']
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD:
      let todo_new = {
        check: false,
        value: action.value
      }
      return {
        ...state,
        todoList: [...state, todo_new]
      };
    default:
      return state;
  }
};