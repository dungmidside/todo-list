import { ADD, REMOVE, CHECK, LOAD, FILTER, ListFilterMode } from '../actions';

const initialState = {
  todoList: [],
  filterMode: ListFilterMode.ALL
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD:
      var todoNew = {
        check: false,
        value: action.value,
        index: action.index
      };
      return {
        ...state,
        todoList: [...state.todoList, todoNew],
      };
    case REMOVE:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.index !== action.index),
      }
    case CHECK:
      var listTemp = [...state.todoList];
      listTemp.map(todo => {
        if (todo.index === action.index) {
          todo.check = !todo.check;
        }
      });
      return {
        ...state,
        todoList: listTemp,
      }
    case LOAD:
      return {
        ...state,
        todoList: action.data,
      }
    case FILTER:
      return {
        ...state,
        filterMode: action.filterMode
      }
    default:
      return state;
  }
};