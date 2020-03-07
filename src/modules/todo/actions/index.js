import FetchHelper from '../../../helpers/FetchHelper';

var indexTodo = 0;

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const CHECK = "CHECK";
export const LOAD = "LOAD";
export const FILTER = "FILTER";

export function add(value) {
  return {
    type: ADD,
    value: value,
    index: indexTodo++
  };
}

export function remove(index) {// action creator
  return {
    type: REMOVE,
    index: index
  }
}

export function check(index) {// action creator
  return {
    type: CHECK,
    index: index
  }
}

export function load(data) {
  return {
    type: LOAD,
    data: data
  }
}

export function filter(filterMode) {
  console.log(filterMode);
  return {
    type: FILTER,
    filterMode: filterMode
  }
}

export const ListFilterMode = {
  ALL: "ALL",
  CHECK: "CHECK",
  UNCHECK: "UNCHECK"
}

export function fetchData() {
  return (dispatch) => {
    FetchHelper.fetch('./data.json').then(([data, status]) => {
      if (status === 200) {
        data.todos.map(todo => {
          todo.index = indexTodo++;
          return todo;
        })
        dispatch(load(data.todos));
      } else {
        dispatch(load([{ check: false, value: 'ERROR' }]));
      }
    })
  }
}


