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

  render() {
    let input;
    const todoList = this.props.todoList;
    // console.log(todoList);
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
            {todoList.map((todo, index) => {
              return (
                <div key={index}>
                  {todo.value}
                </div>
              );
            }
            )}
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
    add: value => dispatch(todoAction.add(value))
  }))(TodoList);