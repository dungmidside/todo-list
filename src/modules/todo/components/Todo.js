import React from 'react';
import { connect } from 'react-redux';
import * as todoAction from '../actions';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  submitTodo() {
    this.props.add(this.state.value);
    this.setState({ value: '' });
    this.input.focus();
  }

  removeTodo(index) {
    this.props.remove(index)
  }

  render() {
    let input;
    const todoList = this.props.todoList;
    return (
      <div>
        <div>
          <form onSubmit={e => {
            e.preventDefault();
            this.submitTodo();
          }}>
            <input type="text"
              onChange={e => this.setState({ value: e.target.value })}
              value={this.state.value}
              ref={node => this.input = node} />
            <button type="submit">Add</button>
          </form>
        </div>

        <div>
          <div>
            <ul>
              {todoList.map((todo, index) => {
                return (
                  <div key={index}>
                    <li>{todo.value}</li>
                    <button onClick={() => this.removeTodo(index)}>Remove</button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    todoList: state.todo.todoList
  }),
  dispatch => ({
    add: value => dispatch(todoAction.add(value)),
    remove: index => dispatch(todoAction.remove(index))
  }))
  (TodoList);