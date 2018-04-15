import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, checkTodo, removeTodo }) => {
  return (
    <div className="list-todo">
      <ul className="list-group">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.index}
              todo={todo}
              onClick={() => checkTodo(todo.index)}
              onRemove={() => removeTodo(todo.index)}
            />)
        })}
      </ul>
    </div>
  )
}

export default TodoList;