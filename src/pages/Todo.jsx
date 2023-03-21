import React from 'react'
import Items from '../components/Items'
import Sidebar from '../components/Sidebar'

const Todo = () => {
  return (
    <div className='todo'>
      <div className="wrapper">
        <Sidebar />
        <Items />
      </div>
    </div>
  )
}

export default Todo