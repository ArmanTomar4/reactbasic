// import React from 'react';

function About() {
  return (
    <>
      <div className="container-fluid ccc">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-white" style={{ paddingTop: "140px" }}>
            <h1
              className="text-center"
              style={{
                fontSize: "1.5cm",
                marginTop: "4cm",
                fontFamily: "prague",
              }}
            >
              OUR STORY
            </h1>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <div className="container">
        <h2 className="a">
          ONCE UPON <b style={{ color: "orange" }}>AN AFFAIRE</b>
        </h2>
        <br />
        <div className="row">
          <div
            className="col-md-7"
            data-aos="zoom-out-down"
            data-aos-delay="400"
            data-aos-duration="2000"
          >
            <p className="b">
              First Fiddle Restaurants, formerly known as The Lazeez Affaire
              Group, was conceived in the year 1999 by Priyank Sukhija and Y.P.
              Ashok. Since then, the company has made a name for itself as
              innovators and leaders in the industry. Starting with their first
              brand, Lazeez Affaire, Priyank popularised the concept of fine
              dining at a time when the same was unheard of. Following its
              success, First Fiddle introduced the concept of casual dining
              with brands such as Warehouse Cafe, Tamasha, Lord of The Drinks,
              Flying Saucer Cafe, and more, storming Delhi’s nightlife. With
              each new brand, First Fiddle brought a concept that was never
              experienced or heard of before, such as Plum by Bent Chair, Miso
              Sexy, Diablo, and more. The restaurants are spread all over India
              in major metropolitan cities like New Delhi, Mumbai, Pune,
              Lucknow and more, with plans to expand internationally soon.
            </p>
          </div>
          <div
            className="col-md-5 text-center"
            data-aos="flip-left"
            data-aos-delay="400"
            data-aos-duration="2000"
          >
            <img src="https://pn-paul.netlify.app/image/first.jpg" alt="" className="w-100" />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="container-fluid c2">
        <div className="row">
          <div className="col-md-2"></div>
          <div
            className="col-md-8 text-white"
            style={{ paddingTop: "140px" }}
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="2000"
          >
            <h1 className="text-center aa">THE GAME CHANGER</h1>
            <p
              style={{
                lineHeight: "40px",
                letterSpacing: "1px",
                wordSpacing: "1px",
                marginTop: "10px",
                textAlign: "center",
                fontWeight: "lighter",
                paddingBottom: "2cm",
              }}
            >
              The company is dedicated to being a game changer in the F&B
              industry with the introduction of ‘concept’ restaurants. It is
              committed to catering to the ever-changing cosmopolitan taste of
              its customers & customer satisfaction is an utmost priority.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="container">
        <h1 className="text-center ex">
          THE MAN <b style={{ color: "orange" }} className="our">
            BEHIND THE FIDDLE
          </b>
        </h1>
        <div className="row">
          <div
            className="col-md-4"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="2000"
          >
            <div className="card shadow mt-4">
              <img src="https://pn-paul.netlify.app/image/about-priyank.jpg" alt="" />
            </div>
          </div>
          <div
            className="col-md-8"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="2000"
          >
            <p
              style={{
                lineHeight: "40px",
                letterSpacing: "1px",
                wordSpacing: "1px",
                marginTop: "20px",
                fontWeight: "lighter",
                paddingBottom: "2cm",
              }}
            >
              With over 30 restaurants in 23 years under his belt, the prolific
              restaurateur Priyank Sukhija has become somewhat of a legend in
              the industry, starting his journey at a mere age of 19. Priyank
              was the first in his family to venture into business, hailing from
              a family of lawyers, going on to create an empire in F&B.
              Following his heart and tongue through his F&B career, Priyank has
              successfully created some of the most talked-about brands in the
              industry - Diablo, Lord of the Drinks, Plum by Bent Chair, Lazeez
              Affaire, Tamasha, The Flying Saucer Cafe, and many more.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="container">
        <h2 className="a">
          JOIN &nbsp; <b style={{ color: "orange" }}>OUR FAMILY</b>
        </h2>
        <br />
        <div className="row">
          <div
            className="col-md-7"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="2000"
          >
            <p className="b">
              At First Fiddle Restaurants, we leave no stone unturned to provide
              the most desirable experience across markets and restaurants.
              Serving over five lakh customers monthly with 15+ brands and 35+
              restaurants, our brands like Diablo, Plum by Bent Chair,
              Dragonfly Experience, Tamasha, Daddy, JLWA, and more have
              revolutionized the experience of dining & nightlife for everyone.
              Exploring a franchise with First Fiddle Restaurants provides you
              with a large existing customer base besides the added advantage
              of nation-wide recognition.
            </p>
            <h6>
              <button
                className="btn btn-warning btn-lg mt-5 text-light"
                style={{ marginBottom: "2cm", marginTop: "3cm" }}
              >
                Franchise With Us
              </button>
            </h6>
          </div>
          <div
            className="col-md-5 text-center"
            data-aos="zoom-out-down"
            data-aos-delay="400"
            data-aos-duration="2000"
          >
            <img
              src="image/333X3322.jpg"
              alt=""
              style={{ width: "90%" }}
              className="mt-3 mb-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
