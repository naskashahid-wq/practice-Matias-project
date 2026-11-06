import React from "react";
import designer from '../../assets/banner-man-62844818.png';
import About from "../about/about"
import Works from "../works/works"
import Services from "../services/services"
import Testimonial from "../testimonial/testimonial"
import Blog from "../Testimonial/Blog/blog";
import Contact from "../contact/contact"

import "./home.css";

const Home = () => {
  return (
    <>
      <aside>
        <div className="rotate">+021-574-328-301</div>

        <div className="column">
          Scroll Down <i className="fa-solid fa-arrow-right"></i>
        </div>
      </aside>
      <main className="mainSection">
        <div>
          <p style={{ color: "whitesmoke" }}>
            Currently avaliable for freelance <br />
            worldwide <span style={{ fontSize: "40px" }}>↗</span>
          </p>

          <h1 style={{ color: "whitesmoke" }}>
            Creative Visual <br />
            Designer
          </h1>

          <div className="content">
            <i className="fa-solid fa-circle-play"></i>
            Work <br />
            Process
          </div>
        </div>

        <img src={designer} alt="" height="800" />
      </main>
      <About/>
       <Works/>
      <Services/>
      <Testimonial/>
     <Blog/>
      <Contact/>

    </>
  );
};
export default Home;
