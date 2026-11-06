import React from "react";
import person from "../../assets/png.png";
import "./services.css";
const Services = ()=> {
  return (
    <>
    <div className="services-page">
      <section className="meeting-section">

        <div className="meeting-content">
          <div className="small-heading">
            <span></span> Let's Work Together
          </div>

          <h2>
            Let's Work Together,
            <br />
            Fixed A Meeting
          </h2>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <div>
                <small>Email</small>
                <p>CreativeDesign@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <small>Location</small>
                <p>Victoria Street London, England</p>
              </div>
            </div>
          </div>
        </div>

        <div className="meeting-image">
          <img src={person} alt="Person working at desk" />
        </div>

      </section>
      <section className="special-services">

        <div className="section-heading">
          <span>My Special Service</span>
          <h2>
            My Special Service For Your
            <br />
            Business Development
          </h2>
        </div>

        <div className="service-list">

          <div className="service-row">
            <span className="service-number">01</span>
            <div className="service-title">
              <small>Design</small>
              <h3>Illustration Design</h3>
            </div>
            <p>Make your ideas attractive with creative and modern illustrations.</p>
            <button>↗</button>
          </div>

          <div className="service-row">
            <span className="service-number">02</span>
            <div className="service-title">
              <small>Branding</small>
              <h3>Business Branding</h3>
            </div>
            <p>Build a strong brand identity with professional branding solutions.</p>
            <button>↗</button>
          </div>

          <div className="service-row">
            <span className="service-number">03</span>
            <div className="service-title">
              <small>UI/UX Design</small>
              <h3>Web UI/UX Design</h3>
            </div>
            <p>Create beautiful and user-friendly designs for your website.</p>
            <button>↗</button>
          </div>

          <div className="service-row active">
            <span className="service-number">04</span>
            <div className="service-title">
              <small>Web Design</small>
              <h3>Application Design</h3>
            </div>
            <p>Design modern applications with a clean and attractive interface.</p>
            <button>↗</button>
          </div>

          <div className="service-row">
            <span className="service-number">05</span>
            <div className="service-title">
              <small>SEO Analytics</small>
              <h3>Digital Marketing</h3>
            </div>
            <p>Grow your business with effective digital marketing strategies.</p>
            <button>↗</button>
          </div>

        </div>
      </section>
      <section className="building-process">

        <div className="section-heading">
          <span>Building Process</span>
          <h2>
            Your Dream Website In Just Few
            <br />
            Steps
          </h2>
        </div>

        <div className="process-cards">

          <div className="process-card">
            <h3>Concept</h3>
            <p>
              We start with understanding your requirements.
            </p>
            <ul>
              <li>Understanding your needs</li>
              <li>Target audience and competitors research</li>
              <li>Developing an idea</li>
            </ul>
          </div>

          <div className="process-card">
            <h3>Design</h3>
            <p>
              Creating beautiful and modern designs for your website.
            </p>
            <ul>
              <li>Developing wireframes and mockups</li>
              <li>Choosing typography and colors</li>
              <li>Finalizing the design</li>
            </ul>
          </div>

          <div className="process-card">
            <h3>Webflow</h3>
            <p>
              Turning the approved design into a fully working website.
            </p>
            <ul>
              <li>Building the website</li>
              <li>Checking compatibility and responsiveness</li>
              <li>Publishing the design</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
    </>
  );
}

export default Services;
