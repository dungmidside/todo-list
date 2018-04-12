import React from 'react';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import * as todoAction from '../actions'

function getVisiableTodoList(todos, filterMode) {
  switch (filterMode) {
    case "ALL":
      return todos;
    case "CHECKED":
      return todos.map(todo => todo.check)
    default:
      return todos;
  }
}

export default connect(
  state => {
    todoList: getVisiableTodoList(state.todoList, state.filterMode)
  })
  (dispatch => ({
    checkTodo: index => dispatch(todoAction.check(index)),
    removeTodo: index => dispatch(todoAction.remove(index))
  }))
  (TodoList);