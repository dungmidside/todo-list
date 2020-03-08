import React from 'react'
import TodoItem from './TodoItem'

export default ({ todos, onChecked, onRemove }) => {
  return (
    <div className="list-todo">
      <ul className="list-group">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.index}
              todo={todo}
              onClick={() => onChecked(todo.index)}
              onRemove={() => onRemove(todo.index)}
            />)
        })}
      </ul>
    </div>
  )
}