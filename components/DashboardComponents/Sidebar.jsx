"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { account, databases } from "@/components/AppwriteConfig";
const Sidebar = () => {
  const pathname = usePathname();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await account.get();
        setUserDetails(response);

        const dataPromise = databases.listDocuments(
          "646df0f09aabfb2b250c",
          "646df0f8b0a70785de1f"
        );
        const dataResponse = await dataPromise;

        const loggedInEmail = response.email;
        const user = dataResponse.documents.find(
          (doc) => doc.email === loggedInEmail
        );
        if (user) {
          const role = user.role;
          if (role !== "Creator") {
            alert(
              "You do not have permission to access this page. Please log in as a Creator."
            );
            window.location.href = "/SignIn";
          }
        } else {
          console.log("User not found");
          window.location.href = "/SignIn";
        }
      } catch (error) {
        console.log(error);
        alert("Error retrieving user details.");
        window.location.href = "/SignIn";
      }
    };

    fetchData();
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
