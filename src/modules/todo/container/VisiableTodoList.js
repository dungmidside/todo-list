import React from 'react';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import * as todoAction from '../actions'

const getVisiableTodoList = (todos, filterMode) => {
  var ListFilterMode = todoAction.ListFilterMode;
  switch (filterMode) {
    case ListFilterMode.ALL:
      return todos;
    case ListFilterMode.CHECK:
      return todos.filter(todo => todo.check)
    case ListFilterMode.UNCHECK:
      return todos.filter(todo => !todo.check)
    default:
      return todos;
  }
}

export default connect(
  state => ({
    todos: getVisiableTodoList(state.todo.todoList, state.todo.filterMode)
  }),
  dispatch => ({
    checkTodo: index => dispatch(todoAction.check(index)),
    removeTodo: index => dispatch(todoAction.remove(index))
  }))
  (TodoList);