import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/logo.png'

const Navbar = () => {
  return (
    <div className='container mt-4'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <img src={logo} alt="logo" />
          
          {/* Toggler */}
          <button 
            className="navbar-toggler custom-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light fw-semibold">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-light fw-semibold">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link text-light fw-semibold">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-light fw-semibold">Contact</Link>
              </li>          
            </ul>
            <div>
              <li className="nav-item list-unstyled">
                <Link to="/donate" className="primary bg-primary p-1 btn text-light fw-bold">Donate</Link>
              </li> 
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
