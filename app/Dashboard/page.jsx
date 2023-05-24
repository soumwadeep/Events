import Sidebar from "@/components/DashboardComponents/Sidebar";
import Image from "next/image";
import instruc from "@/img/instruc.webp";
const page = () => {
  return (
    <div>
      <Sidebar />
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Instructions:</h1>
                <h4>
                  1. Create Events: In This Section You Can Create Different
                  Events.
                </h4>
                <h4>
                  2. Invite Attendees: After Creating The Events You Can Now
                  Invite Attendees From Here.
                </h4>
                <h4>
                  3. Manage RSVP's: Now To Manage The RSVP's Received You Can
                  Further Go Here And Manage All The RSVP's.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <Image
            src={instruc}
            alt="Instructions"
            className="imgfix mt-5"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
