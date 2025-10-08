// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.png';
import { colors } from '../../constant/colors';
import { Heart } from 'lucide-react';
const Navbar = () => {
  return (
    <div style={{position:'fixed', top:0, right:0, left:0}}>
      <nav
        className="navbar navbar-expand-lg shadow-sm py-3 px-3"
        style={{ backgroundColor: 'white', color:colors.black }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="logo"
              style={{ height: '50px', marginRight: '10px' }}
            />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: colors.secondary }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-3">
              {['Home', 'About', 'Blog', 'Contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="nav-link text-dark fw-semibold fs-5 position-relative link-hover"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Donate Button */}
            <Link
              to="/donate"
              className="btn fw-bold text-light  px-4 py-2"
              style={{
                backgroundColor: colors.tertiary,
               
              }}
            >
              <Heart/> Donate
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
