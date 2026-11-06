import React from "react";
import designer1 from '../../assets/JPG1.jfif';
import designer2 from '../../assets/YELLOW .JPG';
import designer3 from '../../assets/UIUX.JPG';
import designer4 from '../../assets/JPG.2.jfif';
import designer5 from '../../assets/JPG.3.jfif';
import designer6 from '../../assets/JPG.4.jfif';
import "./works.css";
const Works = ()=> {
  return (
    <>
    <section className="projects">

      <div className="project-heading">
        <div className="project-subtitle">
          <span></span>
          Creative Projects
          <span></span>
        </div>

        <h1>
          Look At My Portfolio And Give Me
          <br />
          Your Feedback
        </h1>
      </div>

      <div className="project-container">

        <div className="project-column">

          <div className="project-card">
           <img src={designer1} alt="Designer1" />

            <p className="project-category">PROJECT DESIGN</p>
            <div className="project-info">
              <h3>Brand Identity & Motion Design</h3>
              <button>↗</button>
            </div>
          </div>

          <div className="project-card">
         <img src={designer2} alt="Designer2" />
            <p className="project-category">PRODUCT DESIGN</p>
            <div className="project-info">
              <h3>Design & Branding Mockup</h3>
              <button>↗</button>
            </div>
          </div>

          <div className="project-card">
             <img src={designer3} alt="Designer3" />
            <p className="project-category">UI/UX DESIGN</p>
            <div className="project-info">
              <h3>Mobile Application Development</h3>
              <button>↗</button>
            </div>
          </div>

        </div>
        <div className="project-column">

          <div className="project-card">
            <img src={designer4} alt="Designer4" />
            <p className="project-category">UI/UX DESIGN</p>
            <div className="project-info">
              <h3>Mobile Application Development</h3>
              <button>↗</button>
            </div>
          </div>

          <div className="project-card">
            <img src={designer5} alt="Designer5" />
            <p className="project-category">UI/UX DESIGN</p>
            <div className="project-info">
              <h3>Mobile Application Development</h3>
              <button>↗</button>
            </div>
          </div>

          <div className="project-card">
             <img src={designer6} alt="Designer6" />
            <p className="project-category">UI/UX DESIGN</p>
            <div className="project-info">
              <h3>Mobile Application Development</h3>
              <button>↗</button>
            </div>
          </div>

        </div>

      </div>

      <div className="project-more">
        <button className="more-button">
          <span>↗</span>
          <small>Click Here More</small>
        </button>
      </div>

    </section>
   </>
  );
}

export default Works;
