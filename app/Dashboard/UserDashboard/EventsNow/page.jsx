import UserSidebar from "@/components/DashboardComponents/UserSidebar";

const page = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-2">
          <UserSidebar />
        </div>
        <div className="col-sm">
          <h1>Events Available Now</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
