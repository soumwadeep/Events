"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/DashboardComponents/Sidebar";
import { databases } from "@/components/AppwriteConfig";

const page = ({ params }) => {
  const docId = params.docId;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await databases.getDocument(
          "646df0f09aabfb2b250c",
          "64714c8a1def3f1d523b",
          docId
        );
        setEvent(response);
      } catch (error) {
        console.error("Error", error);
        alert("You Are Not Logged In!Please Log In To See All Events...");
        window.location.replace("/SignIn");
      }
    };

    if (docId) {
      fetchEvent();
    }
  }, [docId]);

  if (!docId || !event) {
    return <h4 style={{ color: "red" }}>Loading...</h4>;
  }

  return (
    <div className="row fetchimg">
      <div className="col-sm-2">
        <Sidebar />
      </div>
      <div className="col-sm">
        {/* <h4>Title:</h4> */}
        <div dangerouslySetInnerHTML={{ __html: event.title }}></div>
        {/* <h4>Description:</h4> */}
        <div dangerouslySetInnerHTML={{ __html: event.description }}></div>
      </div>
    </div>
  );
};

export default page;
