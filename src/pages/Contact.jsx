// import React from 'react';

function Contact() {
  return (
    <>
      {/* Banner Section */}
      <div className="container-fluid cccccc">
        <div className="row">
          <div className="col-md-2"></div>
          <div
            className="col-md-8 text-white"
            style={{ paddingTop: '140px' }}
          >
            <h1
              className="text-center"
              style={{
                fontSize: '1.5cm',
                marginTop: '4cm',
                fontFamily: 'prague',
              }}
            >
              CONTACT US
            </h1>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container">
        <div className="row">
          {/* Message Form */}
          <div
            className="col-md-6 mt-4 send"
            data-aos="fade-down"
          >
            <h4
              className="mt-4 mb-4"
              style={{
                fontFamily: 'unset',
                fontSize: '1.5rem',
                fontWeight: 'lighter',
                lineHeight: '1.2',
              }}
            >
              SEND US A MESSAGE
            </h4>
            <form>
              <div className="mb-3 mt-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                />
              </div>
              <div className="mb-3 mt-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone*"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Message*"
                  rows="4"
                ></textarea>
              </div>
              <div className="d-md-flex justify-content-md-center">
                <button className="btn bg-warning btn-lg text-light">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className="col-md-5 mt-4 ms-1"
            style={{
              lineHeight: '20px',
              letterSpacing: '1px',
              wordSpacing: '1px',
              fontWeight: 'lighter',
              paddingBottom: '2cm',
            }}
          >
            <h2
              className="mt-4 mb-4"
              style={{
                fontFamily: 'unset',
                fontSize: '1.5rem',
                fontWeight: 'lighter',
                lineHeight: '1.2',
              }}
            >
              CONTACT INFO
            </h2>
            <h6 style={{ color: 'orange' }}>Address</h6>
            <p>
              6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi
              110021
            </p>

            <h6 style={{ color: 'orange' }}>For Franchise Enquiry</h6>
            <p>
              MOBILE: <b style={{ color: 'orange' }}>+91 9313663486</b>
            </p>
            <p>
              EMAIL:{' '}
              <b style={{ color: 'orange' }}>franchise@firstfiddle.in</b>
            </p>

            <h6 style={{ color: 'orange' }}>For HR Enquiry</h6>
            <p>
              MOBILE: <b style={{ color: 'orange' }}>+91 9999304427</b>
            </p>
            <p>
              EMAIL: <b style={{ color: 'orange' }}>hr@firstfiddle.in</b>
            </p>

            <h6 style={{ color: 'orange' }}>For Other Enquiry</h6>
            <p>
              PHONE: <b style={{ color: 'orange' }}>7676380000</b>
            </p>
            <p>
              EMAIL:{' '}
              <b style={{ color: 'orange' }}>
                customercare@firstfiddle.in
              </b>
            </p>
            <p>Open: Monday - Saturday 10:30 - 19:30</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
