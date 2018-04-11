export const ADD = "ADD";
export function add(value) {
  return {
    type: ADD,
    value: value
  };
}