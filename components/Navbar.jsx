import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link" aria-current="page" href="#">
                Home
              </Link>
              <Link class="nav-link" href="/Features">
                Features
              </Link>
              <Link class="nav-link" href="/">
                Pricing
              </Link>
              <Link class="nav-link" href="/">
                Contact
              </Link>
              <Link class="nav-link" href="/">
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
