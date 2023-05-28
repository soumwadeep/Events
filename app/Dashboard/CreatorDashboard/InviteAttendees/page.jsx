"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/DashboardComponents/Sidebar";
import { account, databases } from "@/components/AppwriteConfig";
const page = () => {
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    account.get().then(
      (response) => {
        if (response.$id) {
          const getEvents = databases.listDocuments(
            "646df0f09aabfb2b250c",
            "64714c8a1def3f1d523b"
          );
          getEvents
            .then(
              (events) => {
                setEvents(events.documents);
              },
              (error) => {
                console.error(error);
                alert("Failed to fetch events");
              }
            )
            .finally(() => {
              setLoader(false);
            });
        } else {
          console.log("User is not logged in");
          setLoader(false);
        }
      },
      (error) => {
        console.error(error);
        alert("Failed to fetch user");
        setLoader(false);
      }
    );
  }, []);
  // Declare Invite Function
  return (
    <div>
      <div className="row">
        <div className="col-sm-2">
          <Sidebar />
        </div>
        <div className="col-sm">
          <h1>Invite Attendees For Events</h1>
          <h3>Upcoming Events:</h3>
          <div className="created-events events-list">
            {events.map((event) => (
              <div key={event.$id} className="events">
                <div dangerouslySetInnerHTML={{ __html: event.title }}></div>
                <div
                  dangerouslySetInnerHTML={{ __html: event.description }}
                ></div>
                <button
                  className="btn btn-success me-3"
                  // onClick={() => handleEdit(event)}
                >
                  Invite
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
