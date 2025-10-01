import React from "react";
import { Twitter, Instagram, Youtube, Globe } from "lucide-react"; // Globe used instead of Pinterest
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 d-flex justify-content-center">
      <div className="container">
        <div className="row">

          {/* Logo + Text */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">
              <span style={{ color: "#1abc9c" }}>❤</span> Dubbe Foundation
            </h4>
            <p className="mt-3 fs-5 fw-semibold">10k</p>
            <p>Worldwide Client<br />Already Connected</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4 ">
            <h6 className="fw-bold">Quick Link</h6>
            <ul className="list-unstyled mt-3 d-flex flex-column">
              <Link to={'/'}><a href="#" className="text-light text-decoration-none">Home</a></Link>
              <Link to={'/about'}><a href="#" className="text-light text-decoration-none">About Us</a></Link>
              <Link to={'/blog'}><a href="#" className="text-light text-decoration-none">Blog Post</a></Link>
              <Link to={'/contact'}><a href="#" className="text-light text-decoration-none">Contact Us</a></Link>
              <Link to={'/donate'}><a href="#" className="text-light text-decoration-none">Donate Services</a></Link>
            </ul>
          </div>
          {/* Address */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Address</h6>
            <p className="mt-3">2464 Royal Ln. Mesa,<br />New Jersey 45463</p>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            {/* Social Icons */}
            <h6 className="fw-bold">Follow Us</h6>
            <div className="mt-3 d-flex gap-3">
              <a href="#" className="text-light"><Twitter size={24} /></a>
              <a href="#" className="text-light"><Instagram size={24} /></a>
              <a href="#" className="text-light"><Globe size={24} /></a> {/* Pinterest substitute */}
              <a href="#" className="text-light"><Youtube size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <hr className="border-secondary" />
        <p className="text-center text-light mb-0">
          Designed & Developed By Abdiladif Mohamud
        </p>
      </div>
    </footer>
  );
};

export default Footer;
