import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
       <>
             <header>
        <nav className="navbar">
          <h2 style={{ color: " rgb(204, 255, 0);" }}>
            <span
              className="logoicon"
              style={{ fontSize: "50px", color: " rgb(204, 255, 0);" }}
            >
              🦇
            </span>
            Matias
          </h2>

          <ul className="listitems">
            <li>
              <Link className="yellow" to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/works">WORKS</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/testimonial">TESTIMONIAL</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>

          <button>
            Let's Talk <i className="fa-solid fa-arrow-right"></i>
          </button>
        </nav>
      </header>
       </>
    )
}
export default Navbar