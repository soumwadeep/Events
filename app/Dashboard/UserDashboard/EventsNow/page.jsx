"use client";
import { useState, useEffect } from "react";
import { account, databases } from "@/components/AppwriteConfig";
import { useRouter } from "next/navigation";
import UserSidebar from "@/components/DashboardComponents/UserSidebar";

const Page = () => {
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(false);
  const [userId, setUserId] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setLoader(true);
    account.get().then(
      (response) => {
        if (response.$id) {
          setUserId(response.$id);
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

          const getUserEvents = databases.listDocuments(
            "646df0f09aabfb2b250c",
            "6483cf17894217a4f50e"
          );

          getUserEvents.then(
            (events) => {
              setRegisteredEvents(events.documents);
            },
            (error) => {
              console.error(error);
              alert("Failed To Fetch Registered Events");
            }
          );
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
    const isRegistered = registeredEvents.some(
      (event) => event.eventId === eventId && event.userId === userId
    );

    if (isRegistered) {
      alert("You have already registered for this event.");
      return;
    }

    const dId = Date.now().toString();
    const docData = { eventId, userId };
    const promise = databases.createDocument(
      "646df0f09aabfb2b250c",
      "6483cf17894217a4f50e",
      dId,
      docData
    );
    promise.then(
      function (response) {
        console.log(response); // Success
        setRegisteredEvents((prevEvents) => [
          ...prevEvents,
          { $id: dId, eventId, userId },
        ]);
      },
      function (error) {
        console.log(error); // Failure
        alert("Failed to register for the event");
      }
    );
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
                  {/* <div dangerouslySetInnerHTML={{ __html: event.description }}></div> */}
                  <button
                    className="btn btn-warning me-3"
                    onClick={() => handleView(event.$id)}
                  >
                    View
                  </button>
                  <button
                    className={`btn btn-success me-3 ${
                      registeredEvents.some(
                        (e) => e.eventId === event.$id && e.userId === userId
                      )
                        ? "disabled"
                        : ""
                    }`}
                    onClick={() => handleJoin(event.$id)}
                    disabled={registeredEvents.some(
                      (e) => e.eventId === event.$id && e.userId === userId
                    )}
                  >
                    {registeredEvents.some(
                      (e) => e.eventId === event.$id && e.userId === userId
                    )
                      ? "Registered"
                      : "Join It"}
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

export default Page;
