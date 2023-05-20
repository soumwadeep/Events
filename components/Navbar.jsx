"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      {/* Pc Navbar */}
      <nav className="navbar navbar-expand-lg pc-navbar sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="logo" className="logo" />
            &nbsp;SgEvents
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
              <Link
                className={`nav-link ${
                  pathname === "/" ? "active" : "nav-link"
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`nav-link ${
                  pathname === "/Features" ? "active" : "nav-link"
                }`}
                href="/Features"
              >
                Features
              </Link>
              <Link
                className={`nav-link ${
                  pathname === "/Pricing" ? "active" : "nav-link"
                }`}
                href="/Pricing"
              >
                Pricing
              </Link>
              <Link
                className={`nav-link ${
                  pathname === "/Contact" ? "active" : "nav-link"
                }`}
                href="/Contact"
              >
                Contact
              </Link>
              <Link
                className={`nav-link ${
                  pathname === "/SignUp" ? "active" : "nav-link"
                }`}
                href="/SignUp"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav className="mobile-navbar fixed-bottom">
        <Link
          className={`nav-link ${pathname === "/" ? "active" : "nav-link"}`}
          href="/"
        >
          <i className="fa-solid fa-house icons"></i>
        </Link>
        <Link
          className={`nav-link ${
            pathname === "/Features" ? "active" : "nav-link"
          }`}
          href="/Features"
        >
          <i className="fa-solid fa-circle-info icons"></i>
        </Link>
        <Link
          className={`nav-link ${
            pathname === "/Pricing" ? "active" : "nav-link"
          }`}
          href="/Pricing"
        >
          <i className="fa-solid fa-dollar-sign icons"></i>
        </Link>
        <Link
          className={`nav-link ${
            pathname === "/Contact" ? "active" : "nav-link"
          }`}
          href="/Contact"
        >
          <i className="fa-solid fa-headset icons"></i>
        </Link>
        <Link
          className={`nav-link ${
            pathname === "/SignUp" ? "active" : "nav-link"
          }`}
          href="/SignUp"
        >
          <i className="fa-solid fa-user-plus icons"></i>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
