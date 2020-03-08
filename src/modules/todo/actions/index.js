import FetchHelper from '../../../helpers/FetchHelper';

let indexTodo = 0;

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const CHECK = "CHECK";
export const LOAD = "LOAD";
export const FILTER = "FILTER";

export const add = (value) => {
  return {
    type: ADD,
    value: value,
    index: indexTodo++
  };
}

export const remove = (index) => {
  return {
    type: REMOVE,
    index: index
  }
}

export const check = (index) => {
  return {
    type: CHECK,
    index: index
  }
}

export const load = (data) => {
  return {
    type: LOAD,
    data: data
  }
}

export const filter = (filterMode) => {
  return {
    type: FILTER,
    filterMode: filterMode
  }
}

export const FilterMode = {
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


