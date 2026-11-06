// import React from "react";
import "./testimonial.css";
import corner from "../../assets/corner.png";
import john from "../../assets/john methcel.png";
import round from "../../assets/round.png";
const Testimonial =()=> {
  return (
    <>
    <div className="testimonial-page">

      <section className="testimonial-section">

        <div className="testimonial-heading">
          <span>──── Testimonial ────</span>
          <h2>
            Happy Words From Happy
          </h2>
        </div>

        <div className="testimonial-card">

          <div className="customer-left">
               <img src={corner} alt="Person" />
           
          </div>

          <div className="review-content">

            <div className="review-top">
              <span className="review-square"></span>
              <span className="stars">★★★★★</span>
            </div>

            <p className="review-text">
              There are many variations of passages of Lorem Ipsum
              available, by injected humour, or randomised words
              which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need
              to be sure there isn't anything embarrassing hidden
              in the middle of text.
            </p>

            <h3>Shawn Beltran</h3>
            <small>Business Owner</small>

            <div className="review-dots">
              <span className="dot active-dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

          </div>

          <div className="customer-right">
              <img src={john} alt="Person" />
          </div>

          <div className="card-decoration">〰</div>

        </div>
        <div className="trusted-clients">

          <h3>More Than 100+ Companies Trusted Us Worldwide</h3>

          <div className="client-logos">
            <span>Walmart ✳</span>
            <span>Linked<span className="logo-box">in</span></span>
            <span>Google</span>
            <span>◈ slack</span>
            <span>Walmart ✳</span>
          </div>

        </div>

      </section>

      <section className="recent-posts">

        <div className="posts-container">

          <div className="posts-left">

            <span className="posts-label">
              ── My Blog
            </span>

            <h2>Recent Posts</h2>

            <button className="blog-button">
              ↗
              <small>Click View Blog</small>
            </button>

          </div>


          <div className="posts-right">

            <div className="post-row active-post">

              <div className="post-info">
                <span className="post-date">October 12, 2023</span>

                <h3>
                  Brand Design That
                  <br />
                  Helps The Company
                  <br />
                  Grow
                </h3>
              </div>
                   {/* <img src={round} alt="Person" /> */}

              <button className="post-arrow active-arrow">⊙</button>

            </div>


            <div className="post-row">

              <div className="post-info">
                <span className="post-date">October 8, 2023</span>

                <h3>
                  Fresh Design Ideas &
                  <br />
                  Inspiration For 2023
                </h3>
              </div>

              <button className="post-arrow">⊙</button>

            </div>


            <div className="post-row">

              <div className="post-info">
                <span className="post-date">October 5, 2023</span>

                <h3>
                  Fresh Design Ideas &
                  <br />
                  Inspiration For 2023
                </h3>
              </div>

              <button className="post-arrow">⊙</button>

            </div>

          </div>

        </div>

      </section>

    </div>

  </>
  );
}

export default Testimonial;
