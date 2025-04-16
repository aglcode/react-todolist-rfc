
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import { useState, useEffect } from 'react'


const App = () => {
  // --- TRADITIONAL VARIABLE
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to angelo', complete: true },
  // ]

  // useState Variables
  const [todos, setTodos] = useState(
    [
      // { input: 'Hello! Add your first todo!', complete: true },
      // { input: 'Get the groceries!', complete: false },
      // { input: 'Learn how to web design', complete: false },
      // { input: 'Say hi to angelo', complete: false },
  ])

  // Dynamic Tabs
  const [selectedTabs, setSelectedTabs] = useState('Open')

  // CRUD FUNCTIONS
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  
  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
     })
     setTodos(newTodoList)
     handleSaveData(newTodoList)
  }
  
  // edit/modify/update
  function handleEditTodo(index) {
    let newToDoList = [...todos]
    let completeToDo = todos[index]
    completeToDo['complete'] = true 
    newToDoList[index] = completeToDo
    setTodos(newToDoList)
    handleSaveData(newTodoList)
  }

   
  // save to DB
  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }

  // Connect to DB using useEffect
  useEffect(() => {
    // security check (if not db return) find the db key 'todo-app'
    if (!localStorage || !localStorage.getItem('todo-app')) 
      { 
        return // return if there is no db / can't find the db 
      }
      let db = JSON.parse(localStorage.getItem('todo-app')) 
      setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTabs={selectedTabs} setSelectedTabs={setSelectedTabs} todos={todos}/>
      <TodoList selectedTabs={selectedTabs} todos={todos} handleDeleteTodo={handleDeleteTodo} 
      handleEditTodo={handleEditTodo}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App