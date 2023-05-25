import Image from "next/image";
import event1 from "@/img/event1.svg";
import event2 from "@/img/event2.svg";
import event3 from "@/img/event3.svg";
import event4 from "@/img/event4.svg";
import event5 from "@/img/event5.svg";
import logo from "@/img/logo.svg";
import Navbar from "@/components/Navbar";
const page = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <div className="text-center mob-head">
                  <Image src={logo} alt="Logo" className="mob-logo" />
                  <h1>Sg Events</h1>
                </div>
                <h2 style={{ color: "#d905dc" }}>Welcome To Sg Events</h2>
                <h5>
                  Plan and manage your events effortlessly with our intuitive
                  event planning app. Whether you're organizing a corporate
                  conference, a wedding, or a community fundraiser, our app
                  provides you with all the tools you need to ensure a
                  successful event from start to finish.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <Image src={event1} alt="Event1" className="imgfix" priority={true} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Image src={event2} alt="Event2" className="imgfix" priority={true} />
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h2 style={{ color: "#05d6d9" }}>
                  Experience the Easy To Use UI
                </h2>
                <h5>
                  With our user-friendly interface, you can create event
                  listings, provide event details, set event dates and
                  locations, and even customize RSVP forms to gather important
                  information from attendees. Keep track of your guest list,
                  send out invitations, and manage RSVPs seamlessly, all in one
                  central location.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h2 style={{ color: "#d905dc" }}>
                  Get The Power Of Collaboration
                </h2>
                <h5>
                  Collaborate with your team or co-organizers by granting them
                  access to event details and attendee information. Our app
                  allows you to assign roles and permissions, ensuring smooth
                  coordination and effective communication among event
                  organizers.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <Image src={event4} alt="Event3" className="imgfix" priority={true} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Image src={event3} alt="Event4" className="imgfix" priority={true} />
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h2 style={{ color: "#05d6d9" }}>
                  Your Vision. Our Expertise.
                </h2>
                <h5>
                  Leave the stress of event planning behind and let our app
                  simplify the process for you. From event creation to attendee
                  management, we've got you covered. Start planning your next
                  event with confidence and make it an unforgettable experience
                  for both you and your attendees.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h2 style={{ color: "#d905dc" }}>
                  Let's Create Unforgettable Memories
                </h2>
                <h5>
                  Are you ready to embark on a journey where your dreams become
                  a reality? Contact us today and let's start crafting an event
                  that will be etched in your memory forever. Together, we will
                  create an experience that goes beyond the ordinary, setting
                  the stage for an extraordinary celebration that will be talked
                  about for years to come.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <Image src={event5} alt="Event5" className="imgfix" priority={true} />
        </div>
      </div>
    </div>
  );
};

export default page;
