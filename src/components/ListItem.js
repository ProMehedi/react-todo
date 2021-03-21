import React from 'react'

const ListItem = ({ title, delHanler, doneHandler, done }) => {
  return (
    <li class='list-group-item d-flex justify-content-between align-items-center'>
      {done && <del>{title}</del>}
      {!done && <>{title}</>}
      <div>
        <button className='btn btn-sm btn-danger mr-2' onClick={delHanler}>
          <i class='far fa-trash-alt'></i>
        </button>
        <button className='btn btn-sm btn-success' onClick={doneHandler}>
          <i class='fas fa-check'></i>
        </button>
      </div>
    </li>
  )
}

export default ListItem
