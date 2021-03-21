import React, { useState } from 'react'
import Form from './components/Form'

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
          <Form
            value={todo}
            submit={submitHandler}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
