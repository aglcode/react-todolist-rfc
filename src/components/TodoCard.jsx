import React from 'react'

const TodoCard = (props) => {
  const { todo, handleDeleteTodo, todoIndex, handleEditTodo} = props

  return (
    <div className=' card todo-item'>
      <p>{todo.input}</p>
      <div className=' todo-buttons'>
        
         <button onClick={() => {handleEditTodo(todoIndex)}} disabled={todo.complete}>Done</button>

         <button onClick={() => {handleDeleteTodo(todoIndex)}}>Delete</button>
      </div>
    </div>
  )
}

export default TodoCard