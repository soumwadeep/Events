"use client";
import { useEffect, useState } from "react";
import { account, databases } from "@/components/AppwriteConfig";
import UserSidebar from "@/components/DashboardComponents/UserSidebar";

const page = () => {
  const [userDetails, setUserDetails] = useState();
  const [userProfile, setUserProfile] = useState();
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
            <h4>No Participation Yet.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
