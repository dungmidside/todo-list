import React from 'react';
import { connect } from 'react-redux'
import * as todoAction from '../actions'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  submitTodo() {
    this.props.dispatch(todoAction.add(this.state.value));
    this.setState({ value: '' });
    this.input.focus();
  }

  render() {
    return (
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
    )
  }
}

export default connect()(Input);