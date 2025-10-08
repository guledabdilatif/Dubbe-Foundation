import React from 'react'
import './Home.css'
import '../About/About.css'
import Header from '../Header/Header'
import Footer from '../../Components/Footer/Footer'
import Articles from '../../Components/Article/Articles'
import { colors } from '../../constant/colors'
import pic6 from "../../assets/hands-helping-solid 1.png"
import pic7 from "../../assets/3.png"
import pic8 from "../../assets/re.png"
import pic9 from "../../assets/globe-asia-solid 1.png"
import pic10 from "../../assets/logo1.png"
import pic11 from "../../assets/logo2.png"
import pic12 from "../../assets/logo3.png"
import pic13 from "../../assets/logo4.png"

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

      <section className="stats container" >
        <div style={{ width: '600px', marginBottom: "30px" }} className='facts'>
          <h3>Our Fun Facts​</h3>
          <h2 style={{ fontWeight: 400 }}>We Believe that We can Save
            More Lifes with you</h2>
        </div>

        <div className="stats-container">
          {/* Card 1 */}
          <div className="stat-card">
            <div className="stat-icon">
              <img src={pic6} alt="" />
            </div>
            <h2>4597+</h2>
            <p>People Rised</p>
          </div>

          {/* Card 2 */}
          <div className="stat-card ">
            <div className="stat-icon">
              <img src={pic7} alt="" />
            </div>
            <h2>8945+</h2>
            <p>Volunteer</p>
          </div>

          {/* Card 3 */}
          <div className="stat-card ">
            <div className="stat-icon">
              <img src={pic8} alt="" />
            </div>
            <h2>10M+</h2>
            <p>Poor People Saved</p>
          </div>

          {/* Card 4 */}
          <div className="stat-card ">
            <div className="stat-icon">
              <img src={pic9} alt="" />
            </div>
            <h2>100+</h2>
            <p>Country Member</p>
          </div>
        </div>
      </section>
      <section className='container'>
        <Articles />
      </section>
      <section className='container'>
        <h3>Our Partners</h3>
        <div className='logo-companies'>
          <div className='logos'>
            <img src={pic10} alt="" />
          </div>
          <div className='logos'>
            <img src={pic11} alt="" />
          </div>
          <div className='logos'>
            <img src={pic12} alt="" />
          </div>
          <div className='logos'>
            <img src={pic13} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home