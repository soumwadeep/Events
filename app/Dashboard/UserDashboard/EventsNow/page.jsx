"use client";
import { useState, useEffect } from "react";
import { account, databases } from "@/components/AppwriteConfig";
import { useRouter } from "next/navigation";
import UserSidebar from "@/components/DashboardComponents/UserSidebar";

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
            "64714c8a1def3f1d523b"
          );
          getEvents
            .then(
              (events) => {
                setEvents(events.documents);
              },
              (error) => {
                console.error(error);
                alert("Failed To Fetch Events");
              }
            )
            .finally(() => {
              setLoader(false);
            });
        } else {
          console.log("You Are Not Logged In!");
          setLoader(false);
        }
      },
      (error) => {
        console.error(error);
        alert("Failed To Fetch Your Data");
        setLoader(false);
      }
    );
  }, []);

  const handleJoin = (eventId) => {
    const eventPageUrl = `https://events.soumwadeepguha.com/Dashboard/CreatorDashboard/CreateEvent/${eventId}`;
    navigator.clipboard
      .writeText(eventPageUrl)
      .then(() => {
        alert("Event Page URL Copied To Clipboard");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed To Copy Event Page URL");
      });
  };

  const handleView = (eventId) => {
    router.push(`/Dashboard/UserDashboard/EventsNow/${eventId}`);
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-2">
          <UserSidebar />
        </div>
        <div className="col-sm">
          <h1>Book Your RSVP Now!</h1>
          {loader ? (
            <h5 style={{ color: "red" }}>Loading All Events...</h5>
          ) : (
            <div className="created-events events-list">
              {events.map((event) => (
                <div key={event.$id} className="events">
                  <div dangerouslySetInnerHTML={{ __html: event.title }}></div>
                  {/* <div
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  ></div> */}
                  <button
                    className="btn btn-warning me-3"
                    onClick={() => handleView(event.$id)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-success me-3"
                    onClick={() => handleJoin(event.$id)}
                  >
                    Join It
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
