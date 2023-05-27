"use client";
import Sidebar from "@/components/DashboardComponents/Sidebar";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useState, useEffect, useRef } from "react";
import { account, databases } from "@/components/AppwriteConfig";

const page = () => {
  const [quillTitle, setQuillTitle] = useState(null);
  const [quillDescription, setQuillDescription] = useState(null);
  const [loader, setLoader] = useState(false);
  const [events, setEvents] = useState([]);
  const [creatorId, setCreatorId] = useState("");
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block", "link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  useEffect(() => {
    const titleEditor = new Quill("#title-editor", {
      theme: "snow",
      modules: { toolbar: toolbarOptions },
    });
    setQuillTitle(titleEditor);

    const descriptionEditor = new Quill("#description-editor", {
      theme: "snow",
      modules: { toolbar: toolbarOptions },
    });
    setQuillDescription(descriptionEditor);

    return () => {
      setQuillTitle(null);
      setQuillDescription(null);
    };
  }, []);

  useEffect(() => {
    setLoader(true);
    account.get().then(
      (response) => {
        setCreatorId(response.$id);
        if (response.$id) {
          const getEvents = databases.listDocuments(
            "646df0f09aabfb2b250c",
            "64714c8a1def3f1d523b"
          );
          getEvents
            .then(
              (events) => {
                const filteredEvents = events.documents.filter(
                  (event) => event.creatorId === response.$id
                );
                setEvents(filteredEvents);
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
  }, [creatorId]);

  const handleSave = () => {
    const title = quillTitle.root.innerHTML;
    const description = quillDescription.root.innerHTML;
    // Perform save operation here using Appwrite SDK
    const docId = Date.now().toString();
    const data = {
      creatorId,
      title,
      description,
    };
    const createDocument = databases.createDocument(
      "646df0f09aabfb2b250c",
      "64714c8a1def3f1d523b",
      docId,
      data
    );

    createDocument
      .then(
        (response) => {
          console.log(response);
          alert("Event Saved Successfully");
          // Refresh the event list
          refreshEventList();
        },
        (error) => {
          console.error(error);
          alert("Failed To Save Event");
        }
      )
      .finally(() => {
        // Clear the Quill editors
        quillTitle.setText("");
        quillDescription.setText("");
      });
  };

  // Edit Section
  const editorRef = useRef(null);

  const handleEdit = (event) => {
    const { title, description } = event;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Set Quill editor content
    quillTitle.clipboard.dangerouslyPasteHTML(title);
    quillDescription.clipboard.dangerouslyPasteHTML(description);
  };

  const handleDelete = (eventId) => {
    // Perform delete operation here using Appwrite SDK
    const deleteDocument = databases.deleteDocument(
      "646df0f09aabfb2b250c",
      "64714c8a1def3f1d523b",
      eventId
    );

    deleteDocument.then(
      (response) => {
        console.log(response);
        alert("Event Deleted Successfully");
        // Refresh the event list
        refreshEventList();
      },
      (error) => {
        console.error(error);
        alert("Failed To Delete Event");
      }
    );
  };
  const refreshEventList = () => {
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
                const filteredEvents = events.documents.filter(
                  (event) => event.userId === response.$id
                );
                setEvents(filteredEvents);
              },
              (error) => {
                console.error(error);
                alert("Failed To Fetch Events");
              }
            )
            .finally(() => {
              setLoader(false);
              window.location.reload();
            });
        } else {
          console.log("You Are Not Logged In");
          setLoader(false);
        }
      },
      (error) => {
        console.error(error);
        alert("Failed To Fetch User");
        setLoader(false);
      }
    );
  };

  return (
    <div>
      <Sidebar />
      <h1>Welcome To Event Creator</h1>
      <h4>
        We Have Incorporated A Total MS Word-Like Environment For You To Make
        Rich Looking Events
      </h4>
      <h2>Title:</h2>
      <div id="title-editor"></div>
      <br />
      <h2>Description:</h2>
      <div id="description-editor"></div>
      <br />
      <button onClick={handleSave} className="btn btn-success">
        Save Event
      </button>
      <br />
      {loader ? (
        <div className="mt-3">Loading Your Events...</div>
      ) : events.length === 0 ? (
        <div className="mt-3" style={{ color: "red" }}>
          You Have Not Created Any Event.
        </div>
      ) : (
        <div>
          <h2 className="text-center mt-3">Your Created Events</h2>
          <div>
            {events.map((event) => (
              <div key={event.$id} className="events">
                <div dangerouslySetInnerHTML={{ __html: event.title }}></div>
                <div
                  dangerouslySetInnerHTML={{ __html: event.description }}
                ></div>
                <button
                  className="btn btn-warning me-3"
                  onClick={() => handleEdit(event)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(event.$id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
