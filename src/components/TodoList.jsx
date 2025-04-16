import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {

   const { todos, selectedTabs } = props

   const filterTodoList = selectedTabs === 'All' ? todos : selectedTabs === 'Complete' ? 
         todos.filter(val => val.complete) : todos.filter(val => !val.complete)

  return (
     <>
        {filterTodoList.map((todo, todoIndex) => {
           return (
             <TodoCard key={todoIndex} todoIndex={todos.findIndex(val => val.input == todo.input)} {...props} todo={todo}/>
           )
        })}
     </> 
  )
}

export default TodoList