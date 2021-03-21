import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Lists from './components/Lists'

const App = () => {
  const [todo, setTodo] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    console.log('Submit!')
  }
  return (
    <div className='container p-3'>
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <Header />
          <Form
            value={todo}
            submit={submitHandler}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Lists />
        </div>
      </div>
    </div>
  )
}

export default App
