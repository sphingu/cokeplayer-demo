import React from 'react'

import Navbar from '../containers/Navbar'

export default ({ children }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Navbar />
      {children}
    </div>
  )
}
