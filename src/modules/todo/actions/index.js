const generateID = () => {
  return '_' + Math.random().toString(36).substr(2, 5);
};

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const CHECK = "CHECK";
export const FILTER = "FILTER";
export const LOAD_DATA = "LOAD_DATA";

export const add = value => {
  return {
    type: ADD,
    value: value,
    index: generateID(),
  };
};

export const remove = index => {
  return {
    type: REMOVE,
    index: index
  };
};

export const check = index => {
  return {
    type: CHECK,
    index: index
  };
};

export const filter = filterMode => {
  return {
    type: FILTER,
    filterMode: filterMode
  };
};

export const FilterMode = {
  ALL: "ALL",
  CHECK: "CHECK",
  UNCHECK: "UNCHECK"
};

export const loadData = data => {
  return {
    type: LOAD_DATA,
    payload: {
      data
    }
  };
};

export function fetchData(url) {
  return dispatch => {
    fetch(url).then(response => {
      if (response.status === 200) {
        response.json()
          .then(jsonData => {
            dispatch(loadData(jsonData.todos));
          })
          .catch(data => console.log('error = ' + data));
      }
    });
  };
}
