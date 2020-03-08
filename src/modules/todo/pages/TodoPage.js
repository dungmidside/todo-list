import React from "react";
import { connect } from 'react-redux';
import Filter from "../components/Filter";
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import * as TodoAction from '../actions';
import { FilterMode } from '../actions';

const TodoPage = ({todos, filterMode, add, checked, remove, filter, ...props}) => {

  const filteredTodos = todos.filter(todo => {
    switch (filterMode) {
      case FilterMode.ALL: 
        return true;
      case FilterMode.CHECK:
        return todo.check;
      case FilterMode.UNCHECK:
        return !todo.check;
      default:
        return todo;
    }
  });
  
  return (
    <div>
      <Input onAdd={add} />
      <Filter onFilter={filter} />
      <TodoList todos={filteredTodos} onChecked={checked} onRemove={remove} />
    </div>
  );
};

const mapStateToProps = ({todo}) => ({
  todos: todo.todoList,
  filterMode: todo.filterMode,
});
const mapDispatchToProps = dispatch => ({
  add: value => dispatch(TodoAction.add(value)),
  checked: id => dispatch(TodoAction.check(id)),
  remove: id => dispatch(TodoAction.remove(id)),
  filter: mode => dispatch(TodoAction.filter(mode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
