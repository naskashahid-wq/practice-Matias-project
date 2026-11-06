import React from "react";
import "./contact.css";

const Contact=()=> {
  return (
    <div className="contact-section">
      <div className="contact-heading">
        <center>
        <h1>GET</h1>
        <h1>IN</h1>
        <h1>Touch</h1>
        </center>
      </div>
      <div className="contact-content">

        <div className="contact-info">
          <p>
            Hello, I'm David Matias, Website & User
            <br />
            Interface Designer based in London.
          </p>

          <a href="mailto:Davidmatias333@gmail.com">
            Davidmatias333@gmail.com
          </a>
        </div>

    
        <div className="contact-links">

          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            Facebook <span>→</span>
          </a>

          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram <span>→</span>
          </a>

          <a href="https://dribbble.com" target="_blank" rel="noreferrer">
            Dribbble <span>→</span>
          </a>

          <a href="https://www.behance.net" target="_blank" rel="noreferrer">
            Behance <span>→</span>
          </a>

        </div>
      </div>
      <footer className="contact-footer">

        <p>
          Copyright © 2025 <span>Matias</span>. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

      </footer>

    </div>
  );
}

export default Contact;