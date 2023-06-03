import UserSidebar from "@/components/DashboardComponents/UserSidebar";

const page = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-2">
          <UserSidebar />
        </div>
        <div className="col-sm">
          <h1>Your Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
