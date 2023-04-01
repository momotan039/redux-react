import React from 'react'
import { useSelector } from 'react-redux'

function SideBar() {
  const user=useSelector(state=>state.user)
  return (
    <div className="sidebar">
        <nav>
        <ul>
            <li>{user.userName} Account</li>
            <li>Home</li>
            <li>About</li>
            <li>Contact Me</li>
        </ul>
    </nav>
    </div>
  )
}

export default SideBar