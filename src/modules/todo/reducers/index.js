import { ADD, REMOVE, CHECK, LOAD, FILTER, LOAD_DATA, FilterMode } from "../actions";

const initialState = {
  todoList: [],
  filterMode: FilterMode.ALL
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      let todoNew = {
        check: false,
        value: action.value,
        index: action.index
      };
      return {
        ...state,
        todoList: [...state.todoList, todoNew]
      };
    case REMOVE:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.index !== action.index)
      };
    case CHECK:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.index === action.index) {
            todo.check = !todo.check;
          }
          return todo;
        })
      };
    case FILTER:
      return {
        ...state,
        filterMode: action.filterMode
      };
    case LOAD_DATA: 
      return {
        ...state,
        todoList: action.payload.data,
      }
    default:
      return state;
  }
};
