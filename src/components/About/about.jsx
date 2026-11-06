import React from "react";
import designer from "../../assets/png.png";
import "./about.css";

const About = ()=> {
  return (
        <>
    <section className="about-section">
      <div className="about-intro">

        <div className="about-star">✳</div>

        <p>
          I'm David Matias, I'm a Brand Webflow Designer,
          Currently residing in the lush Victoria Street London,
          Matias operates globally and is ready to take on any
          design challenge.
        </p>

      </div>
      <div className="about-tabs">
        <button className="active">ABOUT</button>
        <button>EXPERIENCE</button>
        <button>EDUCATION</button>
        <button>SKILLS</button>
      </div>

      <div className="personal-card">
        <div className="designer-box">
          <img src={designer} alt="Designer working on laptop" />
        </div>
        <div className="personal-info">

          <h2>Personal Info</h2>

          <p className="description">
            Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit consectetur, aliquam quaerat voluptatem.
            Ut enim ad minima veniam, exercitationem laboriosam,
            nisi ut aliquid ex ea autem velit esse quam nihil.
          </p>
          <div className="info-grid">

            <div className="info-box">
              <span>Email</span>
              <p>Matias999@Gmail.Com</p>
            </div>

            <div className="info-box">
              <span>Phone</span>
              <p>+(2) 871 382 023</p>
            </div>

            <div className="info-box">
              <span>Address</span>
              <p>Victoria Street London,</p>
            </div>

            <div className="info-box">
              <span>Follow</span>

              <div className="social-icons">
                <a href="#facebook">f</a>
                <a href="#twitter">♥</a>
                <a href="#linkedin">in</a>
                <a href="#website">◎</a>
                <a href="#instagram">▣</a>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="statistics-bar">
        <div className="statistics-content">

          <span>✳ 80+ Team Members</span>
          <span>✳ 1520 + Project Completed</span>
          <span>✳ 1020+ Satisfied Clients</span>
          <span>✳ 80+ Team Members</span>
          <span>✳ 12+ Worldwide Languages</span>
          <span>✳ 1520 + Project Completed</span>
          <span>✳ 1020+ Satisfied Clients</span>

        </div>
      </div>

    </section>

    </>
  );
}
export default About;
