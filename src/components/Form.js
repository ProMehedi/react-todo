import React from 'react'

const Form = ({ value, submit, onChange }) => {
  return (
    <form onSubmit={submit}>
      <div className='form-group row align-items-center'>
        <div className='col-sm-9'>
          <input
            type='text'
            className='form-control-plaintext'
            placeholder='What to do?'
            value={value}
            onChange={onChange}
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
