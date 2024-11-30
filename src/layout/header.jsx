function Header() {
    return (
      <>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    <img src="image/ff-logo-02.png" className="weblogo" alt="" />
                    <img src="image/logo-for-mobile.png" className="moblogo" alt="" />
                </a>

                {/* mobile menu */}
                <button className="navbar-toggler" data-bs-target="#pn" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu start */}
                <div className="navbar-collapse collapse" id="pn">
                    <ul className="navbar-nav ms-auto text-center">
                        <li>
                            <a className="nav-link" href="/" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                HOME
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="/about" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="/brand" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                BRAND
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="/ourteam" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                OUR TEAM
                            </a>
                        </li>
                        <li>
                            <a
                                href="PRESS RELEASE.html"
                                className="nav-link"
                                style={{ fontWeight: "lighter", fontSize: "15px" }}
                            >
                                PRESS RELEASE
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="/contact" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                CONTACT
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="/careers" style={{ fontWeight: "lighter", fontSize: "15px" }}>
                                CAREERS
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="nav-link"
                                style={{ fontWeight: "lighter", fontSize: "15px", border: "1px orange solid" }}
                            >
                                FRANCHISE
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>
    );
}

export default Header;
