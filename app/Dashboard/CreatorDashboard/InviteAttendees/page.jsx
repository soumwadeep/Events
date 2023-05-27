import Sidebar from "@/components/DashboardComponents/Sidebar"

const page = () => {
  return (
    <div>
        <div className="row">
          <div className="col-sm-2">
            <Sidebar/>
          </div>
          <div className="col-sm">
            <h1>Invite Your Attendees</h1>
          </div>
        </div>
    </div>
  )
}

export default page
