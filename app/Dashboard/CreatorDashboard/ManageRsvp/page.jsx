"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/DashboardComponents/Sidebar";
import { account, databases } from "@/components/AppwriteConfig";
import { useRouter } from "next/navigation";

const page = () => {
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoader(true);
    account.get().then(
      (response) => {
        if (response.$id) {
          const getEvents = databases.listDocuments(
            "646df0f09aabfb2b250c",
            "6483cf17894217a4f50e"
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

  const handleView = (eventId) => {
    const eventPageUrl = `/Dashboard/CreatorDashboard/CreateEvent/${eventId}`;
    router.push(eventPageUrl);
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-2">
          <Sidebar />
        </div>
        <div className="col-sm">
          <h1>Manage RSVP's From Here</h1>
          <h3>All Events:</h3>
          {loader ? (
            <h5 style={{ color: "red" }}>Loading All Events...</h5>
          ) : (
            <div className="created-events events-list">
              {events.map((event) => (
                <div key={event.$id} className="events">
                  <div className="row">
                    <div className="col-sm">
                      <h4>Event Title:</h4>
                      <div
                        dangerouslySetInnerHTML={{ __html: event.eventTitle }}
                      ></div>
                    </div>
                    <div className="col-sm">
                      <h4>Attendee Details:</h4>
                      <p>Name:</p>
                      <div
                        dangerouslySetInnerHTML={{ __html: event.attendeeName }}
                      ></div>
                      <p>Email:</p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: event.attendeeEmail,
                        }}
                      ></div>
                      <p>Phone:</p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: event.attendeePhone,
                        }}
                      ></div>
                    </div>
                  </div>
                  <button
                    className="btn btn-warning me-3"
                    onClick={() => handleView(event.eventId)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-danger me-3"
                    onClick={() => handleDelete()}
                  >
                    Revoke
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
