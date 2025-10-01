import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/Blog'}>Blog</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/donate'}>Donate</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar