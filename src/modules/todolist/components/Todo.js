import React from 'react';
import { connect } from 'react-redux';
import * as TodoAction from '../actions/index'

class TodoList extends React.Component {
  render() {
    const todoList = this.props.todoList;
    console.log(todoList);
    return (
      <div>
        <div>
          <input type="text" />
          <button type="submit">Add</button>
        </div>

        <div>
          <div>
            {todoList.map((todo, index) => {
              return (
                <div>
                  <ul>
                    <li key={index}>
                      {todo}
                    </li>
                  </ul>
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
  state => {
    return {
      todoList: state.todo.todoList
    }
  },
  dispatch => {
    add: value => dispatch(TodoAction.add(value));
  })(TodoList);