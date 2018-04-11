import FetchHelper from '../../../helpers/FetchHelper';

var indexTodo = 0;

export const ADD = "ADD";
export function add(value) {
  return {
    type: ADD,
    value: value,
    index: indexTodo++
  };
}

export const REMOVE = "REMOVE";
export function remove(index) {// action creator
  return {
    type: REMOVE,
    index: index
  }
}

export const CHECK = "CHECK";
export function check(index) {// action creator
  return {
    type: CHECK,
    index: index
  }
}

export const LOAD = "LOAD";
export function load(data) {
  return {
    type: LOAD,
    data: data
  }
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


