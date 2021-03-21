import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='container p-3'>
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
