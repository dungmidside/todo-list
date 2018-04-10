import React from 'react';

const Todo = ({ text, isCompleted, onClick }) => {
  return (
    <div>
      <li onClick={() => { alert('clicked') }}>
        {text}
      </li>
    </div>
  );
}

export default Todo;