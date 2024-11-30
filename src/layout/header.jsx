// import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
      <>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <Link to="#" className="navbar-brand">
                    <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" className="weblogo" alt="" />
                    <img src="https://pn-paul.netlify.app/image/logo-for-mobile.png" className="moblogo" alt="" />
                </Link>

                {/* mobile menu */}
                <button className="navbar-toggler" data-bs-target="#pn" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu start */}
                <div className="navbar-collapse collapse" id="pn">
                    <ul className="navbar-nav ms-auto text-center">
                        <li>
                            <Link className="nav-link" to="/" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/about" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/brand" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                BRAND
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/team" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                OUR TEAM
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/pressrelease"
                                className="nav-link"
                                style={{ fontWeight: "lighter", fontSize: "15px" }}
                            >
                                PRESS RELEASE
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                CONTACT
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/careers" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                CAREERS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="nav-link"
                                style={{ fontWeight: "lighter", fontSize: "15px", border: "1px orange solid" }}
                            >
                                FRANCHISE
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>
    );
}

export default Header;
