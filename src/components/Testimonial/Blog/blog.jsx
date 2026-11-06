import React from "react";
import "./blog.css";
const Blog=()=> {
  return (
    <>
      <section className="blog-section">

        <div className="blog-small-heading">
          <span></span>
          <h4>Working Process</h4>
          <span></span>
        </div>

        <h1 className="blog-main-heading">
          Your Dream Website In Just Few
          <br />
          Steps
        </h1>

        <div className="blog-cards">
          <div className="blog-card">

            <h2>Concept</h2>

            <p>
              Nemo enim ipsam voluptatem voluptas sit
              <br />
              aspernatur aut odit aut fugit
            </p>

            <ul>
              <li>Reviewing any existing branding</li>
              <li>Target audience and competitors research</li>
              <li>Developing a strategy</li>
            </ul>

            <div className="card-corner"></div>

          </div>
          <div className="blog-card">

            <h2>Design</h2>

            <p>
              Nemo enim ipsam voluptatem voluptas sit
              <br />
              aspernatur aut odit aut fugit
            </p>

            <ul>
              <li>Developing wireframes and mockup</li>
              <li>Choosing typography, color palettes,</li>
              <li>Refining the design</li>
            </ul>

            <div className="card-corner"></div>

          </div>
          <div className="blog-card active-card">

            <h2>Webflow</h2>

            <p>
              Nemo enim ipsam voluptatem voluptas sit
              <br />
              aspernatur aut odit aut fugit
            </p>

            <ul>
              <li>Testing the website thoroughly launch</li>
              <li>Choosing typography, color palettes,</li>
              <li>Refining the design</li>
            </ul>

            <div className="card-corner green-corner"></div>

          </div>

        </div>

      </section>

      <section className="blog-testimonial">

        <div className="testimonial-small-heading">
          <span></span>
          <h4>Testimonial</h4>
          <span></span>
        </div>

      </section>

    </>
  );
}

export default Blog;