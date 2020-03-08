import React from "react";

export default ({ todo, onClick, onRemove }) => {
  return (
    <div className="list-item">
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        onClick={onClick}
        style={{ textDecoration: todo.check ? "line-through" : "none" }}
      >
        {todo.value}
        <span class="badge badge-primary badge-pill">
          <div className="fa fa-trash-alt" onClick={onRemove} />
        </span>
      </li>
    </div>
  );
};
