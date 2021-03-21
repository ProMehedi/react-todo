import React from 'react'
import ListItem from './ListItem'

const Lists = () => {
  return (
    <div className='listWrap'>
      <ul className='list-group'>
        {[...Array(15)].map((x, i) => (
          <ListItem key={i} title={`This is title ${i + 1}`} />
        ))}
      </ul>
    </div>
  )
}

export default Lists
