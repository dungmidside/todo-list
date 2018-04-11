export const ADD = "ADD";
export function add(value) {
  return {
    type: ADD,
    value: value
  };
}

export const REMOVE = "REMOVE";
export function remove(index) {
  return {
    type: REMOVE,
    index: index
  }
}