import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
  const user=useSelector(state=>state.user)
  return (
    <header>
        <div className="logo">
            <h1>Redux App</h1>
        </div>
            <span>Hello {user.userName}</span>
    </header>
  )
}

export default Header