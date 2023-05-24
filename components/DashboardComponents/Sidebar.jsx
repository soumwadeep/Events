"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/img/logo.webp";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div>
      <button
        className="btn btn-warning fixed-top menubtn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <h5>
          <i className="fa-solid fa-bars barsicon"></i> Menu
        </h5>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
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
              pathname === "/Dashboard/CreateEvent" ? "active" : ""
            }`}
            href="/Dashboard/CreateEvent"
          >
            <h4>Create A Event</h4>
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/Dashboard/InviteAttendees" ? "active" : ""
            }`}
            href="/Dashboard/InviteAttendees"
          >
            <h4>Invite Attendees</h4>
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/Dashboard/ManageRsvp" ? "active" : ""
            }`}
            href="/Dashboard/ManageRsvp"
          >
            <h4>Manage RSVP</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
