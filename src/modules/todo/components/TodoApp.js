import React from 'react';
import Input from '../container/Input';
import VisiableTodoList from '../container/VisiableTodoList';
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