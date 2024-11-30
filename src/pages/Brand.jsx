// import React from "react";

function Brand() {
    return (
        <>
            {/* Banner Section */}
            <div className="container-fluid cccc">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-white" style={{ paddingTop: "140px" }}>
                        <h1
                            className="text-center"
                            style={{
                                fontSize: "1.5cm",
                                marginTop: "4cm",
                                fontFamily: "prague, sans-serif",
                            }}
                        >
                            BRAND
                        </h1>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            {/* Card Gallery */}
            <div className="container">
                {/* First Row */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img
                                src="https://pn-paul.netlify.app/image/logo-resize-04-700x466.jpg"
                                alt="Logo 1"
                                className="w-100"
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img
                                src="https://pn-paul.netlify.app/image/logo-resize-07-700x466.jpg"
                                alt="Logo 2"
                                className="w-100"
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img
                                src="https://pn-paul.netlify.app/image/Untitled-design-min.jpg"
                                alt="Logo 3"
                                className="w-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img src="https://pn-paul.netlify.app/image/Untitled-design-min.jpg" alt="Logo 4" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img
                                src="https://pn-paul.netlify.app/image/555555555555555555.jpg"
                                alt="Logo 5"
                                className="w-100"
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img
                                src="https://pn-paul.netlify.app/image/666666666666.jpg"
                                alt="Logo 6"
                                className="w-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Third Row */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img src="https://pn-paul.netlify.app/image/7777.jpg" alt="Logo 7" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img src="https://pn-paul.netlify.app/image/88888888.jpg" alt="Logo 8" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img src="https://pn-paul.netlify.app/image/99999999.jpg" alt="Logo 9" className="w-100" />
                        </div>
                    </div>
                </div>

                {/* Fourth Row */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img src="https://pn-paul.netlify.app/image/100000000.jpg" alt="Logo 10" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img src="https://pn-paul.netlify.app/image/01111.png" alt="Logo 11" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img src="https://pn-paul.netlify.app/image/012222.jpg" alt="Logo 12" className="w-100" />
                        </div>
                    </div>
                </div>

                {/* Fifth Row */}
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow mt-4 ms-4">
                            <img src="https://pn-paul.netlify.app/image/bougie.jpeg" alt="Logo 13" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img src="https://pn-paul.netlify.app/image/01444.png" alt="Logo 14" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-4 ms-4">
                            <img src="https://pn-paul.netlify.app/image/0155555555.png" alt="Logo 15" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brand;
