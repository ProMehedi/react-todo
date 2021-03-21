import React from 'react'

const Form = () => {
  return (
    <form>
      <div class='form-group row align-items-center'>
        <div class='col-sm-9'>
          <input
            type='text'
            class='form-control-plaintext'
            placeholder='What to do?'
          />
        </div>
        <div className='col-sm-3'>
          <button type='submit' className='btn btn-primary'>
            Add Todo
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
