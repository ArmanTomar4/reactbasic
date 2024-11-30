// import React from "react";
import Slidebar from "../layout/slidebar";

function Home() {
  return (
    <>
      <Slidebar />
      <div className="container mt-3">
        <h2 className="text-center text">
          Welcome To <b style={{ color: "red" }}>FIRST FIDDLE</b>
        </h2>
        <div className="row">
          <div className="col-md-7 mt-3">
            <p className="para">
              First Fiddle Restaurants, one of India most prominent F&B
              companies in the casual dining sector, is headed by Priyank
              Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso
              Sexy and Bougie in 2022, we have created wave after wave in the
              industry with over 30+ restaurants, brands, and franchises across
              India.
            </p>

            <center>
              <button
                className="btn btn-warning btn-lg mt-5"
                style={{ color: "white" }}
              >
                JOIN THE JOURNEY
              </button>
            </center>
          </div>

          <div className="col-md-5 mt-3 text-center">
            <img
              src="https://pn-paul.netlify.app/image/first.jpg"
              alt=""
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container-fluid bg">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="text-center clr">MEDIA MENTIONS</h1>
            <p className="para01">
              We have been making splashes and headlines since 1999 for our
              innovative concepts and aesthetic ideations, experimental
              gastronomic affairs, and exotic mixology. We have made our way from
              the heart of the country into the hearts of its people!
            </p>

            <center>
              <button className="btn btn-warning btn-lg mt-5 mb-5">
                Know more
              </button>
            </center>
            <br />
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h1 className="text-center">
          EXPLORE <span style={{ color: "orange" }}>OUR BRAND</span>
        </h1>
        <br />
        <div className="row">
          <div className="col-md-3 mb-3">
            <img
              src="https://pn-paul.netlify.app/image/ffpic1.jpg"
              alt=""
              className="w-100"
            />
          </div>

          <div className="col-md-3 mb-3">
            <img
              src="https://pn-paul.netlify.app/image/ffpic2.jpg"
              alt=""
              className="w-100"
            />
          </div>

          <div className="col-md-3 mb-3">
            <img
              src="https://pn-paul.netlify.app/image/ffpic3.jpg"
              alt=""
              className="w-100"
            />
          </div>

          <div className="col-md-3 mb-3">
            <img
              src="https://pn-paul.netlify.app/image/ffpic4.jpg"
              alt=""
              className="w-100"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid bg01">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="text-center clr">EXPERIENCE OUR CONCEPTS</h1>
            <p className="para01">
              Moving beyond just offering Indian, international, and fusion
              cuisines, our restaurants create magic with our special events,
              mood-setting music, Insta-worthy aesthetics, and tongue-tingling
              signatures! Head over to experience it for yourself!
            </p>
            <center>
              <button className="btn btn-warning btn-lg mt-5 mb-5">
                Know more
              </button>
            </center>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
