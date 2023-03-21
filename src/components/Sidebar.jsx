import React from 'react'
import Input from './Input'
import Today from './Today'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Today />
      <Input />
    </div>
  )
}

export default Sidebar