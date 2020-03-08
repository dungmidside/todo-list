import React, { useState, useEffect } from "react";

export default ({ onAdd }) => {
  const [value, setValue] = useState("");

  const submitTodo = () => {
    if (!value) {
      return;
    }
    onAdd(value);
    setValue("");
  };

  return (
    <div className="form-input">
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
};
