import React from 'React';

class Input extends React.Component {
  constructor(props) {
    super(props);
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

export default Input;