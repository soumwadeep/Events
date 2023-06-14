"use client";
import { useEffect, useState } from "react";
import { account, databases } from "@/components/AppwriteConfig";
import UserSidebar from "@/components/DashboardComponents/UserSidebar";

const Page = () => {
  const [userDetails, setUserDetails] = useState();
  const [userProfile, setUserProfile] = useState();
  const [userEvents, setUserEvents] = useState();

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
        console.log(EventsAttended.documents);
        setUserEvents(EventsAttended.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

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
                  Addresss: {userProfile.address}
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
            {userEvents ? (
              userEvents.map((event) => (
                <div key={event.$id}>
                  <h4>{event.title}</h4>
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                  {/* Add more event details as needed */}
                </div>
              ))
            ) : (
              <h4>Loading...</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
