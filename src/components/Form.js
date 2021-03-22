import React from 'react'

const Form = ({ error, value, submit, onChange }) => {
  return (
    <form onSubmit={submit}>
      <div className='form-group row align-items-center'>
        <div className='col-9 pr-0'>
          <input
            type='text'
            className='form-control-plaintext'
            placeholder='What to do?'
            required
            value={value}
            onChange={onChange}
          />
          {error && <small className='form-text text-danger'>{error}</small>}
        </div>
        <div className='col-3 text-right'>
          <button type='submit' className='btn btn-primary'>
            Add Todo
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
