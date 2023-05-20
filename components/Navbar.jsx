"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
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
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`nav-link ${
                  pathname === "/Features" ? "active" : ""
                }`}
                href="/Features"
              >
                Features
              </Link>
              <Link
                className={`nav-link ${
                  pathname === "/Pricing" ? "active" : ""
                }`}
                href="/Pricing"
              >
                Pricing
              </Link>
              <Link
                className={`nav-link ${
                  pathname === "/Contact" ? "active" : ""
                }`}
                href="/Contact"
              >
                Contact
              </Link>
              <Link
                className={`nav-link ${pathname === "/SignUp" ? "active" : ""}`}
                href="/SignUp"
              >
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
