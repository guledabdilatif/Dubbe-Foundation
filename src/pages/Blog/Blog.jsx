import React from 'react'
import './Blog.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Blog = () => {
  return (
    <div>
      <div className="header-except-home">
        <Navbar/>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog