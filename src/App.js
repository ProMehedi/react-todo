import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Layout from './components/Layout'
import Lists from './components/Lists'

const App = () => {
  const [todo, setTodo] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    console.log('Submit!')
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
      <Lists />
    </Layout>
  )
}

export default App
