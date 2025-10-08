import React from 'react'
import './Home.css'
import '../About/About.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../../Components/Footer/Footer'
import { colors } from '../../constant/colors'
const Home = () => {
  return (
    <div>
      <Header />


      <div className='Aboutus-first-part'>
        <div className='containerw'>
          <div className='  box boxone'></div>
          <div className=' box boxtwo'></div>
        </div>

        <div className='texts'>
          <div className='heading'>
            <h1>About Us</h1>
          </div>
          <div className='para1'>
            <h3>Your Support is Really Powerful.​</h3>
          </div>
          <div className='para2'>
            <p>The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the
              lives of the poor, the abused and the helpless.</p>
          </div>
          <div className='buttondiv1'>
            <button type='button' style={{ backgroundColor: colors.secondary }}>Read More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home