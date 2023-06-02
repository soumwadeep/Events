"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { account, databases } from "@/components/AppwriteConfig";
const UserSidebar = () => {
  const pathname = usePathname();
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);

        const dataPromise = databases.listDocuments(
          "646df0f09aabfb2b250c",
          "646df0f8b0a70785de1f"
        );
        dataPromise.then(
          function (r) {
            const loggedInEmail = response.email;
            const user = r.documents.find((doc) => doc.email === loggedInEmail);
            if (user) {
              const role = user.role;

              // Verify role and redirect accordingly
              if (role !== "User") {
                alert(
                  "You do not have permission to access this page. Please log in as a Creator."
                );
                window.location.replace("/SignIn");
              }
            } else {
              console.log("User not found");
              window.location.replace("/SignIn");
            }
          },
          function (error) {
            console.log(error);
            alert("Error retrieving user details.");
            window.location.replace("/SignIn");
          }
        );
      },
      function (error) {
        console.log(error);
        alert("You Are Not Logged In! Please Log In To Use Our Product...");
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
            pathname === "/Dashboard/UserDashboard/EventsNow" ? "active" : ""
          }`}
          href="/Dashboard/UserDashboard/EventsNow"
        >
          <h4>Present Events</h4>
        </Link>
        <Link
          className={`nav-link ${
            pathname === "/Dashboard/UserDashboard/UserProfile" ? "active" : ""
          }`}
          href="/Dashboard/UserDashboard/UserProfile"
        >
          <h4>Your Profile</h4>
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
            pathname === "/Dashboard/UserDashboard/EventsNow" ? "active" : ""
          }`}
          href="/Dashboard/UserDashboard/EventsNow"
        >
          <i className="fa-solid fa-ticket icons"></i>
        </Link>
        <Link
          className={`nav-link ${
            pathname === "/Dashboard/UserDashboard/UserProfile" ? "active" : ""
          }`}
          href="/Dashboard/UserDashboard/UserProfile"
        >
          <i className="fa-solid fa-user icons"></i>
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

export default UserSidebar;
