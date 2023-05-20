import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <Image src={logo} alt="logo" className="logo" />
            <h1>SG EVENTS</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" href="#">
                Home
              </Link>
              <Link className="nav-link" href="/Features">
                Features
              </Link>
              <Link className="nav-link" href="/">
                Pricing
              </Link>
              <Link className="nav-link" href="/">
                Contact
              </Link>
              <Link className="nav-link" href="/">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
