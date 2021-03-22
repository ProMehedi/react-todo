import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Layout from './components/Layout'
import Lists from './components/Lists'

const App = () => {
  const [error, setError] = useState(null)
  const [todo, setTodo] = useState('')
  // const [todos, setTodos] = useState([])

  // Get todos from localStorage
  const todos = JSON.parse(localStorage.getItem('todos'))

  const submitHandler = (e) => {
    e.preventDefault()

    if (todo.length < 5) {
      setError('At least 5 word required!')
      return false
    }

    const newTodo = [...todos, { id: Date.now(), title: todo }]

    // Save to localStorage
    localStorage.setItem('todos', JSON.stringify(newTodo))

    setTodo('')
    setError(null)
  }

  const delHandler = (todoId) => {
    if (window.confirm('Are you sure')) {
      const updatedTodos = todos.filter((item) => item.id !== todoId)
      // setTodos(updatedTodos)

      // Save to localStorage
      localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }
  }

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId)
    const newTodo = [...todos]

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    }

    // setTodos(newTodo)

    // Save to localStorage
    localStorage.setItem('todos', JSON.stringify(newTodo))
  }

  return (
    <Layout>
      <Header />
      <Form
        error={error}
        value={todo}
        submit={submitHandler}
        onChange={(e) => setTodo(e.target.value)}
      />
      <hr className='border-primary' />
      <Lists todos={todos} delHandler={delHandler} doneHandler={doneHandler} />
    </Layout>
  )
}

export default App
