import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">O'mar Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/15745077/pexels-photo-15745077.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <span>Marwan</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar