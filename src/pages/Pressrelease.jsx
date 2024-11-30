// import React from 'react';

function Pressrelease() {
  return (
    <>
      {/* Banner Section */}
      <div className="container-fluid ccccd">
        <div className="row mb-5">
          <div className="col-md-2 mb-5"></div>
          <div
            className="col-md-8 text-white"
            style={{ paddingTop: '140px' }}
          >
            <h1
              className="text-center paul"
              style={{
                fontSize: '1.5cm',
                marginTop: '4cm',
                fontFamily: 'prague',
              }}
            >
              PRESS RELEASE
            </h1>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* Offline Mentions Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <i
              className="fa-regular fa-newspaper"
              style={{ fontSize: '1cm' }}
            ></i>
            <span style={{ fontSize: '0.5cm', position: 'relative', top: '-8px' }}>
              OFFLINE
            </span>
            <hr />
          </div>
        </div>
      </div>

      {/* Images Grid - Row 1 */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/1.png" className="w-100 mb-3" alt="Press release 1" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/2.png" className="w-100 mb-3" alt="Press release 2" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/3.png" className="w-100 mb-3" alt="Press release 3" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/4.png" className="w-100 mb-3" alt="Press release 4" />
          </div>
        </div>
      </div>

      {/* Images Grid - Row 2 */}
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/5.png" className="w-100 mb-3" alt="Press release 5" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/6.png" className="w-100 mb-3" alt="Press release 6" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/7.png" className="w-100 mb-3" alt="Press release 7" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/8.png" className="w-100 mb-3" alt="Press release 8" />
          </div>
        </div>
      </div>

      {/* Online Mentions Section */}
      <div className="container mt-4">
        <div className="card" style={{ boxShadow: '1px 1px 12px #020001' }}>
          <div className="row mt-5 mb-5">
            <h3 className="text-center">ONLINE MENTIONS</h3>
            <div className="col-md-1"></div>
            <div
              className="col-md-4"
              data-aos="zoom-in-down"
              data-aos-delay="400"
              data-aos-duration="2000"
            >
              <img
                src="https://pn-paul.netlify.app/image/et-prime.jpg"
                className="w-100 mt-2"
                alt="ET Prime"
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5" style={{ overflowY: 'auto', height: '10cm' }}>
              <p className="mt-4 ms-2">FEB 18, 2020</p>
              <h4 className="ms-2">ET PRIME</h4>
              <p className="go ms-2">
                "Go big, or go home: Lazeez Affaire to Lord of the Drinks, Priyank Sukhija  success recipe for dining"
              </p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr />

              <p className="mt-4 ms-2">JUL 16, 2018</p>
              <h4 className="ms-2">AIN</h4>
              <p className="go ms-2">
                "First Fiddle Restaurants aims top-line growth by 2020; to opt for franchising route to expansion"
              </p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr />

              <p className="mt-4 ms-2">MAY 20, 2019</p>
              <h4 className="ms-2">BUSINESS LINE</h4>
              <p className="go ms-2">"First Fiddle opens outlet in Chennai"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr />

              <p className="mt-4 ms-2">OCT 20, 2010</p>
              <h4 className="ms-2">BUSINESS STANDARD</h4>
              <p className="go ms-2">
                "First Fiddle Restaurants aims top-line growth by 2020; to opt for franchising route to expansion"
              </p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pressrelease;
