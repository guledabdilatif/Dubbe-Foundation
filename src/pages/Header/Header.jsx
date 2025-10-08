import React from 'react'
import './Header.css'
import Navbar from '../../Components/Navbar/Navbar'
import { colors } from '../../constant/colors'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <header>
        <Navbar />

        <section class="hero-section d-flex align-items-center text-white">
          <div class="container text-center">
            <h1 class="fw-bold display-5 mb-3">
              Helping Each Other<br />
              Can Make World Better
            </h1>
            <p class="lead mb-4">
              We Seek Out World Changers And Difference Makers Around The Globe,<br />
              And Equip Them To Fulfill Their Unique Purpose.
            </p>
            <div class="d-flex header-btn justify-content-center gap-3">
              <Link to={"/donate"} class="btn btn-donate px-4 py-2" style={{ background: colors.secondary, color: 'white' }}>Donate Now</Link>
              <Link to={"/about"} class="btn btn-outline-light px-4 py-2">Know About Us</Link>
            </div>
          </div>
        </section>

      </header>
    </div>
  )
}

export default Header