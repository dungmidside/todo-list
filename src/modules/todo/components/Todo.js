import React from 'react';
import { connect } from 'react-redux';
import * as todoAction from '../actions';
import Input from './Input'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  checkTodo(index) {
    this.props.check(index);
  }

  removeTodo(index) {
    this.props.remove(index)
  }

  render() {
    let input;
    const todoList = this.props.todoList;
    return (
      <div>
        <Input />

        <div>
          <p />
          <button>Checked</button>
          <button>Uncheck</button>
          <button>All</button>
          <p />
        </div>

        <div>
          <div>
            <ul>
              {todoList.map((todo) => {
                return (
                  <div key={todo.index}>
                    <li
                      onClick={() => this.checkTodo(todo.index)}
                      style={{ textDecoration: todo.check ? 'line-through' : 'none' }}
                    >
                      {todo.value}
                    </li>
                    <button onClick={() => this.removeTodo(todo.index)}>Remove</button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchData();
  }
}

export default connect(
  state => ({
    todoList: state.todo.todoList
  }),
  dispatch => ({
    check: index => dispatch(todoAction.check(index)),
    remove: index => dispatch(todoAction.remove(index)),
    load: data => dispatch(todoAction.load(data)),
    fetchData: () => dispatch(todoAction.fetchData())
  }))
  (TodoList);