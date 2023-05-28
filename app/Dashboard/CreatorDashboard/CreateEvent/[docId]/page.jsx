"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";
import Sidebar from "@/components/DashboardComponents/Sidebar";
import { databases } from "@/components/AppwriteConfig";

const QuillNoSSRWrapper = dynamic(import("quill"), { ssr: false });

const page = () => {
  const router = useRouter();
  const { docId } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await databases.getDocument(
          "646df0f09aabfb2b250c",
          "64714c8a1def3f1d523b",
          docId
        );
        console.log(response);
        setEvent(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (docId) {
      fetchEvent();
    }
  }, [docId]);

  if (!docId || !event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="col-sm-2">
        <Sidebar />
      </div>
      <div className="col-sm">
        <h1>{event.title}</h1>
        <h2>Description:</h2>
        <div dangerouslySetInnerHTML={{ __html: event.description }}></div>
      </div>
    </div>
  );
};

export default page;
