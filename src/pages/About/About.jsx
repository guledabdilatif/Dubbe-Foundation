import React from 'react'
import './About.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import pic1 from "../../assets/Vector.png"
import pic2 from "../../assets/Vector2.png"
import pic3 from "../../assets/Group 3265.png"
import pic4 from "../../assets/Group 3266.png"
import pic5 from "../../assets/Group 3267.png"
import pic6 from "../../assets/hands-helping-solid 1.png"
import pic7 from "../../assets/3.png"
import pic8 from "../../assets/re.png"
import pic9 from "../../assets/globe-asia-solid 1.png"
import pic10 from "../../assets/logo1.png"
import pic11 from "../../assets/logo2.png"
import pic12 from "../../assets/logo3.png"
import pic13 from "../../assets/logo4.png"

import { colors } from '../../constant/colors'
const About = () => {
  return (
    <>

      <div className='header-except-home'>
        <Navbar />
      </div>

      <div className='insideelements'>
        

        <div className='Aboutus-second-part'>

          <div className='firstpart-text'>
            <div className='h12'><h1>Welcome To Charity</h1></div>
            <div className='h123'>
              <h2>Let Us Come Together
                To Make a Difference</h2>
            </div>
            <div><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo.</p></div>

            <div className='boxes'>
              <div className='box1'>
                <div className='insidebox2-icon'>
                  <div className='icond'>
                    <img src={pic1} alt="" />
                  </div>
                  <div  style={{color:colors.secondary}}><h3>Our mission</h3></div>
                </div>
                <div className='hs' ><p>Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr,
                  sed diam</p></div>

              </div>
              <div className='box2'>
                <div className='insidebox2-icon'>
                  <div className='icond'>
                    <img src={pic2} alt="" />
                  </div>
                  <div style={{color:colors.secondary}}><h3>Our vission</h3></div>
                </div>
                <div className='hs'><p>Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr,
                  sed diam</p></div>

              </div>
            </div>

            <div className='percentages'>
              <div className='percentage1'>
                <div className='line1' >
                  <div className='bg' ><h4>Donations</h4></div>
                  <div className='bh' ><h4>75%</h4></div>
                </div>
                <div className='line2' style={{backgroundColor:colors.secondary}}></div>
              </div>
              <div className='percentage2'>
                <div className='line1'>
                  <div className='bg'><h4>Medical Help</h4></div>
                  <div className='bh'><h4>90%</h4></div>
                </div>
                <div className='line3' ></div>
              </div>
            </div>
          </div>


          <div className='boxespart-two'>
            <div className=' bxo boxs1'></div>
            <div className=' bxo boxs2'>
              <ol className='customstyles'>
                <li> Together, we're going to make the future</li>
                <li>Children where we are able to fulfill all</li>
                <li>Their requirements to keep them safe
                  from withered world</li>
                <li>We have already stepped out and
                  start changing the world</li>
                <li>Keeping safe them from war, inhumanity</li>
              </ol>
            </div>
          </div>
        </div>

        <section className="features">
          <div className="features-header">
            <p className="features-subtitle">About</p>
            <h2 className="features-title">Our Features</h2>
          </div>

          <div className="features-cards">
            {/* Card 1 */}
            <div className="feature-card" style={{backgroundColor:colors.secondary, color:'white'}}>
              <div className="feature-img">
                <img src={pic3} alt="" />
              </div>
              <h3>Food & Homeless Charity</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy
                Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua…
              </p>
              <ul>
                <li>Join Your Hand With Us For A Better Life</li>
                <li>Let’s Do The Right Thing Now</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="feature-card light-bg">
              <div className="feature-img">
                <img src={pic4} alt="" />
              </div>
              <h3>Make A Donation</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy
                Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua…
              </p>
              <ul>
                <li>Join Your Hand With Us For A Better Life</li>
                <li>Let’s Do The Right Thing Now</li>
                <li>Lorem Ipsum Dolor Sit Amet</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="feature-card light-bg">
              <div className="feature-img">
                <img src={pic5} alt="" />
              </div>
              <h3>Non Profit NGO</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy
                Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua…
              </p>
              <ol>
                <li>Join Your Hand With Us For A Better Life</li>
                <li>Let’s Do The Right Thing Now</li>
                <li>Lorem Ipsum Dolor Sit Amet</li>
                <li>Children Where We Are Able To Fulfill All</li>
              </ol>
            </div>
          </div>
        </section>


        <section className="stats">
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

        <section className="gallery-testimonial">
          {/* ======= GALLERY ======= */}
          <div className="gallery-section">
            <h2 className="section-title">Our Gallery</h2>

            <div className="gallery-grid">
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
            </div>
          </div>

          {/* ======= TESTIMONIAL ======= */}
          <div className="testimonial-section" style={{backgroundColor:colors.primary}}>
            <p className="testimonial-subtitle">Our Testimonial</p>
            <h2 className="testimonial-title">What People Say</h2>

            <div className="testimonial-box">
              <button className="nav-btn">&#10094;</button>

              <div className="testimonial-content" style={{backgroundColor:colors.primary}}>
                <div className="testimonial-img"></div>
                <h3>Cameron Williamson</h3>
                <p className="testimonial-role">Founder</p>
                <p className="testimonial-text">
                  Sea Chub Demersal Whalefish Zebra Lionfish Mud Cat, Wobbegong Batfish
                  Man-of-war Snook Leatherjacket Velvet Belly Shark California Halibut
                  Round Stingray Threadfin Snapper Grayling Tarpon Perch Tarpon Candlefish.
                </p>
              </div>

              <button className="nav-btn">&#10095;</button>
            </div>

            <div className="testimonial-dots">
              <span></span>
              <span className="active"></span>
              <span></span>
            </div>
          </div>
        </section>

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
      </div>



      <Footer />

    </>
  )
}

export default About