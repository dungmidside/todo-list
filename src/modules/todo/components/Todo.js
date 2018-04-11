import React from 'react';
import { connect } from 'react-redux';
import * as todoAction from '../actions';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { value: '' };
  }

  submitTodo() {
    this.props.add(this.state.value);
    this.setState({ value: '' });
    this.input.focus();
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
    console.log(this.props.todoList);
  }
}

export default connect(
  state => ({
    todoList: state.todo.todoList
  }),
  dispatch => ({
    add: value => dispatch(todoAction.add(value)),
    check: index => dispatch(todoAction.check(index)),
    remove: index => dispatch(todoAction.remove(index)),
    load: data => dispatch(todoAction.load(data)),
    fetchData: () => dispatch(todoAction.fetchData())
  }))
  (TodoList);