import React from 'react'
import wrld from './Images/Fill 213.png'

const Navbar = () => {
  return (
      <nav className='nav'>
          <img src={wrld} />
          <h3>myTravel.experiences</h3>
      </nav>
  )
}

export default Navbar