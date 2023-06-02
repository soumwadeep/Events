import UserSidebar from "@/components/DashboardComponents/UserSidebar";
import Image from "next/image";
import guestimg from "@/img/guestimg.svg";

const page = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-2">
          <UserSidebar />
        </div>
        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <h1>Instructions For Users:</h1>
                    <h4>
                      1. All Events: In This Section All The Current Running
                      Events Will Be Shown To You.You Can Join The Event By
                      Creating Your RSVP.
                    </h4>
                    <h4>
                      2. Your Profile: Here,You Can See Your Profile Info And
                      Registered Events.
                    </h4>
                    <h4>
                      3. Sign Out: You Can Sign Out From Web App By Clicking On
                      This.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <Image
                src={guestimg}
                alt="Instructions"
                className="imgfix mt-5"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
