import React from 'react'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import pic10 from "../../assets/logo1.png"
import pic11 from "../../assets/logo2.png"
import pic12 from "../../assets/logo3.png"
import pic13 from "../../assets/logo4.png"
const Contact = () => {
  return (
    <>

      <div className="header-except-home">
        <Navbar />
      </div>

 <section className="contact-section">
      <div className="contact-title">
        <h5>Get In Touch</h5>
        <h2>Send Me A Message</h2>
      </div>

      <div className="contact-container">
        {/* Left form */}
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Fast name</label>
              <input type="text" placeholder="Your" />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" placeholder="Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Mail</label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" placeholder="+880" />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Massage</label>
            <textarea placeholder="Type Your Massage Here..."></textarea>
          </div>

          <button type="submit" className="send-btn">Send Massage</button>
        </form>

        {/* Right address box */}
        <div className="contact-info">
          <h3>Address</h3>
          <p>
            Quam elementum pulvinar etiam non quam lacus suspendisse. A scelerisque purus semper eget duis at lobortis.
          </p>
          <p><strong>Location:</strong> 4517 Washington Ave. Manchester, Kentucky 39495</p>
          <p><strong>Phone:</strong> +885.467.67456</p>
          <p><strong>Email:</strong> Givelifecharity@Gmail.Com</p>
        </div>
      </div>
    </section>

      <div className='logo-companies2'>
         <div className='logos2'> <img src={pic10} alt="" /> </div>
          <div className='logos22'> <img src={pic11} alt="" /> </div>
           <div className='logos2'> <img src={pic12} alt="" /> </div>
            <div className='logos2'> <img src={pic13} alt="" /> </div>
            </div>
        <Footer />
      </>
      )
}

      export default Contact