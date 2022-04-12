import React from 'react'
import icon from '../components/images/Troll Face.png'

const Header = () => {
  return (
    <nav className='nav'>
      <div className='nav-title'>
        <img src={icon}/>
        <h1>Meme Generator</h1>
      </div>
    </nav>
  )
}

export default Header