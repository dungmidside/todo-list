import React from 'react';

const TodoItem = ({ todo, onClick, onRemove }) => {
  return (
    <div>
      <li
        onClick={onClick}
        style={{
          textDecoration: todo.check ? 'line-through' :
            'none'
        }}
      >
        {todo.value}
      </li>
      <button onClick={onRemove}>Remove</button>
    </div>
  )
}

export default TodoItem;