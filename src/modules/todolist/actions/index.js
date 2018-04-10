export const ADD = 'ADD';
export function add(text) {
  return {
    type: 'ADD',
    value: text
  }
}