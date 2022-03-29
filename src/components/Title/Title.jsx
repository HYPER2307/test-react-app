import React from 'react'
import './Title.scss'

function Title({ children, titleDesc }) {
  return (
      <div className='title'>{children}
        <div className='title-desc'>{titleDesc}</div>
      </div>
  )
}

export default Title