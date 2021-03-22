import React from 'react'

const ListItem = ({ id, title, delHandler, doneHandler, done }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {done && <del>{title}</del>}
      {!done && <>{title}</>}
      <div>
        <button
          className='btn btn-sm btn-danger mr-2'
          onClick={() => delHandler(id)}
        >
          <i className='far fa-trash-alt'></i>
        </button>
        <button
          disabled={done && 'disabled'}
          className='btn btn-sm btn-success'
          onClick={() => doneHandler(id)}
        >
          <i className='fas fa-check'></i>
        </button>
      </div>
    </li>
  )
}

export default ListItem
