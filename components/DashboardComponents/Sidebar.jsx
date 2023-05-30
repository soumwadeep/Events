"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        // alert(error);
        alert("You Are Not Logged In!Please Log In To Use Our Product...");
        window.location.replace("/SignIn");
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
      <div className="pc-sidebar">
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
      {/* Mobile Navbar */}
      <div className="mobile-navbar fixed-bottom">
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
      </div>
    </div>
  );
};

export default Sidebar;
