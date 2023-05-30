"use client";
import { useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Sidebar from "@/components/DashboardComponents/Sidebar";
import { account, databases } from "@/components/AppwriteConfig";

const page = () => {
  const router = useRouter();
  const [quillTitle, setQuillTitle] = useState(null);
  const [quillDescription, setQuillDescription] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState("");
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
                alert("Failed To Fetch Events");
              }
            )
            .finally(() => {
              setLoader(false);
            });
        } else {
          console.log("User Is Not Logged In");
          setLoader(false);
        }
      },
      (error) => {
        console.error(error);
        alert("Failed To Fetch User");
        setLoader(false);
      }
    );
  }, [creatorId]);

  const handleSave = () => {
    const title = quillTitle.root.innerHTML;
    const description = quillDescription.root.innerHTML;
    const docId = selectedEventId || Date.now().toString();
    const data = {
      creatorId,
      title,
      description,
    };

    if (selectedEventId) {
      // Update existing event
      const updateDocument = databases.updateDocument(
        "646df0f09aabfb2b250c",
        "64714c8a1def3f1d523b",
        selectedEventId,
        data
      );

      updateDocument
        .then((response) => {
          console.log(response);
          alert("Event Updated Successfully");
          // Refresh the event list
          refreshEventList();
        })
        .catch((error) => {
          console.error(error);
          alert("Failed To Update Event");
        });
    } else {
      // Create new event
      const createDocument = databases.createDocument(
        "646df0f09aabfb2b250c",
        "64714c8a1def3f1d523b",
        docId,
        data
      );

      createDocument
        .then((response) => {
          console.log(response);
          alert("Event Saved Successfully");
          // Refresh the event list
          refreshEventList();
          // Navigate to the newly generated event page
          router.push(`/Dashboard/CreatorDashboard/CreateEvent/${docId}`);
        })
        .catch((error) => {
          console.error(error);
          alert("Failed To Save Event");
        });
    }

    // Clear the Quill editors
    quillTitle.setText("");
    quillDescription.setText("");
  };

  const handleEdit = (event) => {
    const { title, description, $id } = event;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Set Quill editor content
    quillTitle.clipboard.dangerouslyPasteHTML(title);
    quillDescription.clipboard.dangerouslyPasteHTML(description);

    // Set the selected event ID
    setSelectedEventId($id);
  };

  const handleDelete = async (eventId) => {
    try {
      // Perform delete operation here using Appwrite SDK
      await databases.deleteDocument(
        "646df0f09aabfb2b250c",
        "64714c8a1def3f1d523b",
        eventId
      );

      alert("Event Deleted Successfully");

      // Refresh the event list
      refreshEventList();
    } catch (error) {
      console.error(error);
      alert("Failed To Delete Event");
    }

    // Reset the selected event ID
    setSelectedEventId("");
  };

  const refreshEventList = async () => {
    setLoader(true);

    try {
      const response = await account.get();

      if (response.$id) {
        const events = await databases.listDocuments(
          "646df0f09aabfb2b250c",
          "64714c8a1def3f1d523b"
        );

        const filteredEvents = events.documents.filter(
          (event) => event.creatorId === response.$id
        );

        setEvents(filteredEvents);
      } else {
        console.log("You Are Not Logged In");
      }
    } catch (error) {
      console.error(error);
      alert("Failed To Fetch Events");
    } finally {
      setLoader(false);
    }
  };

  const handleEventClick = (docId) => {
    console.log("Event Click", docId);
    router.push(`/Dashboard/CreatorDashboard/CreateEvent/${docId}`);
  };

  return (
    <div className="row">
      <div className="col-sm-2">
        <Sidebar />
      </div>
      <div className="col-sm">
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
          {selectedEventId ? "Edit Event" : "Save Event"}
        </button>
        <br />
        {loader ? (
          <div className="mt-3">Loading Your Events...</div>
        ) : events.length === 0 ? (
          <div className="mt-3" style={{ color: "red" }}>
            You Have Not Created Any Event.
          </div>
        ) : (
          <div className="events-box">
            <h2 className="text-center mt-3">Your Created Events</h2>
            <div className="created-events events-list">
              {events.map((event) => (
                <div key={event.$id} className="events">
                  <div dangerouslySetInnerHTML={{ __html: event.title }}></div>
                  <div
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  ></div>
                  <button
                    className="btn btn-success me-3"
                    onClick={() => handleEventClick(event.$id)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-warning me-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(event);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(event.$id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
