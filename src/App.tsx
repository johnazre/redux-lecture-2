import React, { useState, useEffect } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import AddTodoForm from './components/AddTodoForm'
import TodosList from './components/TodosList'
import { ITodo } from './types'

const App: React.FC = () => {
  return (
    <div className="App">
      <TopNav />
      <AddTodoForm />
      <TodosList />
    </div>
  )
}

export default App
