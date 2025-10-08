// src/components/Footer.jsx
import React from "react";
import { Twitter, Instagram, Youtube, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../../constant/colors";
import './Footer.css'
import logo from '/logo.png'
const Footer = () => {
  return (
    <footer
      className="text-light pt-5 pb-3 mt-5"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="container">
        <div className="row gy-4">

          {/* Logo + Text */}
          <div className="col-md-3">
            <h4 className="fw-bold mb-3">
            <img src={logo} width={260} alt="" className="white-logo" />
            </h4>
           
            <p className="mb-0">Worldwide Clients<br />Already Connected</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/blog", label: "Blog Post" },
                { to: "/contact", label: "Contact Us" },
                { to: "/donate", label: "Donate Services" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="footer-link text-decoration-none text-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Address</h6>
            <p className="mb-0">
              2464 Royal Ln. Mesa,<br />
              New Jersey 45463
            </p>
          </div>

          {/* Social Icons */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-3 mt-2">
              {[
                { icon: <Twitter size={24} />, link: "#" },
                { icon: <Instagram size={24} />, link: "#" },
                { icon: <Globe size={24} />, link: "#" },
                { icon: <Youtube size={24} />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="social-icon text-light d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-light opacity-25" />

        {/* Bottom Line */}
        <p className="text-center mb-0" style={{ fontSize: "0.9rem" }}>
          Designed & Developed by{" "}
          <span style={{ color: colors.tertiary }}>Abdiladif Mohamud</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
