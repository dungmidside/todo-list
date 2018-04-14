import React from 'react';
import Input from './Input';
import VisiableTodoList from './VisiableTodoList';
import Filter from '../components/Filter';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Input />
        <Filter />
        <VisiableTodoList />
      </div>
    )
  }
}

export default TodoApp;