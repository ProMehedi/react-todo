import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Layout from './components/Layout'
import Lists from './components/Lists'

const App = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    setTodos([...todos, { id: Date.now(), title: todo }])
    setTodo('')
  }

  const delHandler = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId))
  }

  return (
    <Layout>
      <Header />
      <Form
        value={todo}
        submit={submitHandler}
        onChange={(e) => setTodo(e.target.value)}
      />
      <hr className='border-primary' />
      <Lists todos={todos} delHandler={delHandler} />
    </Layout>
  )
}

export default App
