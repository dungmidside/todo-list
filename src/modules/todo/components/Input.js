import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import * as todoAction from '../actions';

function Input(props) {
  const [value, setValue] = useState('');

  const submitTodo = () => {
    if (!value) {
      return;
    } 
    props.dispatch(todoAction.add(value.trim()));
    setValue('');
  };

  return (
    <div class="form-input">
      <form
        onSubmit={e => {
          e.preventDefault();
          submitTodo();
        }}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="type here"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
        </div>
      </form>
    </div>
  );
}

export default connect()(Input);
