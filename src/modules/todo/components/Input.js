import React from "react";
import { connect } from "react-redux";
import * as todoAction from "../actions";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  submitTodo() {
    if (!this.state.value) {
      return;
    } else {
      this.props.dispatch(todoAction.add(this.state.value.trim()));
    }
    this.setState({ value: "" });
    this.input.focus();
  }

  render() {
    return (
      <div class="form-input">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.submitTodo();
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="type here"
              onChange={e => this.setState({ value: e.target.value })}
              value={this.state.value}
              ref={node => (this.input = node)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Input);
