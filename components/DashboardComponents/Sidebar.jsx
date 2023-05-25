"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/img/logo.svg";
import { useEffect, useState } from "react";
import { account } from "@/components/AppwriteConfig";
const Sidebar = () => {
  const pathname = usePathname();
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
        alert(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div>
      <button
        className="btn btn-warning fixed-top menubtn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="fa-solid fa-bars barsicon"></i>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <Image src={logo} className="logo" alt="Logo" /> Sg Events
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Link
            className={`nav-link ${
              pathname === "/Dashboard/CreatorDashboard/CreateEvent"
                ? "active"
                : ""
            }`}
            href="/Dashboard/CreatorDashboard/CreateEvent"
          >
            <h4>Create A Event</h4>
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/Dashboard/CreatorDashboard/InviteAttendees"
                ? "active"
                : ""
            }`}
            href="/Dashboard/CreatorDashboard/InviteAttendees"
          >
            <h4>Invite Attendees</h4>
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/Dashboard/CreatorDashboard/ManageRsvp"
                ? "active"
                : ""
            }`}
            href="/Dashboard/CreatorDashboard/ManageRsvp"
          >
            <h4>Manage RSVP</h4>
          </Link>
          <Link
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
            href="#"
            onClick={handleLogout}
          >
            <h4>Sign Out</h4>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <nav className="mobile-navbar fixed-bottom">
        <Link
          className={`nav-link ${
            pathname === "/Dashboard/CreatorDashboard/CreateEvent"
              ? "active"
              : ""
          }`}
          href="/Dashboard/CreatorDashboard/CreateEvent"
        >
          <i className="fa-regular fa-calendar-plus icons"></i>
        </Link>
        <Link
          className={`nav-link ${
            pathname === "/Dashboard/CreatorDashboard/InviteAttendees"
              ? "active"
              : ""
          }`}
          href="/Dashboard/CreatorDashboard/InviteAttendees"
        >
          <i className="fa-solid fa-share-nodes icons"></i>
        </Link>
        <Link
          className={`nav-link ${
            pathname === "/Dashboard/CreatorDashboard/ManageRsvp"
              ? "active"
              : ""
          }`}
          href="/Dashboard/CreatorDashboard/ManageRsvp"
        >
          <i className="fa-solid fa-file-circle-exclamation icons"></i>
        </Link>
        <Link
          className={`nav-link ${pathname === "/" ? "active" : ""}`}
          href="/"
        >
          <i className="fa-solid fa-right-from-bracket icons"></i>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
