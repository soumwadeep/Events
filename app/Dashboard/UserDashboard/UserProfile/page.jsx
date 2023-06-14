"use client";
import { useEffect, useState } from "react";
import { account, databases } from "@/components/AppwriteConfig";
import UserSidebar from "@/components/DashboardComponents/UserSidebar";
import { useRouter } from "next/navigation";

const Page = () => {
  const [userDetails, setUserDetails] = useState();
  const [userProfile, setUserProfile] = useState();
  const [userEvents, setUserEvents] = useState();
  const router = useRouter();

  useEffect(() => {
    const getData = account.get();
    getData.then(function (response) {
      setUserDetails(response);
      const dataPromise = databases.listDocuments(
        "646df0f09aabfb2b250c",
        "646df0f8b0a70785de1f"
      );
      dataPromise.then(function (r) {
        const loggedInEmail = response.email;
        const user = r.documents.find((doc) => doc.email === loggedInEmail);
        setUserProfile(user);
      });
    });
  }, []);

  useEffect(() => {
    let promise = databases.listDocuments(
      "646df0f09aabfb2b250c",
      "6483cf17894217a4f50e"
    );
    promise.then(
      function (EventsAttended) {
        setUserEvents(EventsAttended.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const loggedInUserId = userDetails ? userDetails.$id : null;

  const userRegisteredEvents = userEvents
    ? userEvents.filter((event) => event.userId === loggedInUserId)
    : [];
  const handleAttend = (eventId) => {
    router.push(`/Dashboard/UserDashboard/EventsNow/${eventId}`);
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-2">
          <UserSidebar />
        </div>
        <div className="col-sm">
          <h1>Your Profile:</h1>
          <div className="row">
            <div className="col-sm">
              {userProfile ? (
                <h4 className="heading">
                  Name: {userProfile.name}
                  <br />
                  Email: {userProfile.email}
                  <br />
                  Phone No: {userProfile.phone}
                  <br />
                  Role: {userProfile.role}
                </h4>
              ) : (
                <h4>Loading...</h4>
              )}
            </div>
            <div className="col-sm">
              {userProfile ? (
                <h4 className="heading">
                  Address: {userProfile.address}
                  <br />
                  City: {userProfile.city}
                  <br />
                  State: {userProfile.state}
                  <br />
                  Zip: {userProfile.zip}
                </h4>
              ) : (
                <h4>Loading...</h4>
              )}
            </div>
          </div>
          <div className="row">
            <h2>Your Participated Events:</h2>
            {userRegisteredEvents.length > 0 ? (
              userRegisteredEvents.map((event) => (
                <div className="participatedevents" key={event.$id}>
                  <h4>Event Title:</h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: event.eventTitle }}
                  ></div>
                  {/* <h5>Event Description:</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: event.eventDescription,
                    }}
                  ></div> */}
                  <button
                    className="btn btn-success me-3"
                    onClick={() => handleAttend(event.eventId)}
                  >
                    Attend
                  </button>
                </div>
              ))
            ) : (
              <h4>No Participated Events Found.</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
