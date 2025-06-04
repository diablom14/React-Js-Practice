import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {
  return (
    <>
      <h1>Welcome to todo app</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App