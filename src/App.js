import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Layout from './components/Layout'
import Lists from './components/Lists'

const App = () => {
  const [error, setError] = useState(null)
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (todo.length < 5) {
      setError('At least 5 word required!')
      return false
    }

    setTodos([...todos, { id: Date.now(), title: todo }])
    setTodo('')
    setError(null)
  }

  const delHandler = (todoId) => {
    if (window.confirm('Are you sure')) {
      setTodos(todos.filter((item) => item.id !== todoId))
    }
  }

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId)
    const newTodo = [...todos]

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: true,
    }

    setTodos(newTodo)
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
