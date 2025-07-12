import React from 'react'

function Navbar({toggleSidebar}) {
  return (
    <div className='w-full bg-cyan-500 flex justify-between items-center px-4 py-4'>
        Navbar
        <button onClick={toggleSidebar} className='bg-pink-300 px-3 py-1 rounded-lg'>Toggle</button>
    </div>
  )
}

export default Navbar;