import React from 'react'
import ListItem from './ListItem'

const Lists = ({ todos }) => {
  return (
    <div className='listWrap'>
      <ul className='list-group'>
        {todos.map((todo) => (
          <ListItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  )
}

export default Lists
