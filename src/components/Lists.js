import React from 'react'
import ListItem from './ListItem'

const Lists = ({ todos, delHandler, doneHandler }) => {
  return (
    <div className='listWrap'>
      <ul className='list-group'>
        {!todos && <h1>Not Found</h1>}
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <ListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              done={todo.done}
              delHandler={delHandler}
              doneHandler={doneHandler}
            />
          ))}
      </ul>
    </div>
  )
}

export default Lists
