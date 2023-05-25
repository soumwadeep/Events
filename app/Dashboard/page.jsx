import Sidebar from "@/components/DashboardComponents/Sidebar";
import Image from "next/image";
import instruc from "@/img/instruc.svg";
import guestimg from "@/img/guestimg.svg";
const page = () => {
  return (
    <div>
      <Sidebar />
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Instructions For Creators:</h1>
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
      <div className="row">
        <div className="col-sm">
          <Image
            src={guestimg}
            alt="Instructions"
            className="imgfix mt-5"
            priority={true}
          />
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Instructions For Users:</h1>
                <h4>
                  1. Events: In This Section You Will Get All Events That Are
                  Currently Happening.
                </h4>
                <h4>
                  2. Join: This Button Will Take You To The RSVP Section Of That
                  Particular Event And From There You Can Fill The RSVP Form And
                  Will Be Able To Join The Event.
                </h4>
                <h4>
                  3. Sign Out: This Will Sign Out You And Take You To Home Page.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
