import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import seamless from "@/img/seamless.svg";
import customize from "@/img/customize.svg";
import rsvp from "@/img/rsvp.svg";
import ticket from "@/img/ticket.svg";
import guest from "@/img/guest.svg";
import collab from "@/img/collab.svg";
import analytics from "@/img/analytics.svg";
import integration from "@/img/integration.svg";
const page = () => {
  return (
    <div>
      <Head>
        <title>Our Features</title>
      </Head>
      <Navbar />
      <h1 className="text-center">Our Features</h1>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <Image
              src={seamless}
              alt="Seamless Event Management"
              className="card-img-top"
              priority={true}
            />
            <div className="card-body">
              <h2>Seamless Event Management</h2>
              <p className="card-text">
                Effortlessly plan, organize, and manage your events from start
                to finish. Our intuitive event management tools streamline the
                process, saving you time and energy while ensuring every detail
                is taken care of.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <Image
              src={customize}
              alt="Customizable Event Websites"
              className="card-img-top"
              priority={true}
            />
            <div className="card-body">
              <h2>Customizable Event Websites</h2>
              <p className="card-text">
                Impress your attendees with stunning event websites tailored to
                your brand. Showcase event details, provide online registration
                options, and engage your audience with interactive features that
                make your event truly stand out.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <Image
              src={rsvp}
              alt="Invitations and RSVP Management"
              className="card-img-top"
              priority={true}
            />
            <div className="card-body">
              <h2>Invitations and RSVP Management</h2>
              <p className="card-text">
                Simplify the invitation process with our intuitive RSVP
                management system. Send beautiful, personalized invitations,
                track responses in real-time, and manage guest lists with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <Image
              src={ticket}
              alt="Event Ticketing and Registration"
              className="card-img-top"
              priority={true}
            />
            <div className="card-body">
              <h2>Event Ticketing and Registration</h2>
              <p className="card-text">
                Effortlessly plan, organize, and manage your events from start
                to finish. Our intuitive event management tools streamline the
                process, saving you time and energy while ensuring every detail
                is taken care of.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <Image
              src={guest}
              alt="Guest Experience Enhancements"
              className="card-img-top"
              priority={true}
            />
            <div className="card-body">
              <h2>Guest Experience Enhancements</h2>
              <p className="card-text">
                Elevate the guest experience with our innovative features. From
                event check-ins and digital badges to personalized schedules and
                networking tools, we ensure your attendees have a memorable and
                engaging experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <Image
              src={collab}
              alt="Seamless Collaboration"
              className="card-img-top"
              priority={true}
            />
            <div className="card-body">
              <h2>Seamless Collaboration</h2>
              <p className="card-text">
                Collaborate effortlessly with your team and event stakeholders.
                Our platform enables smooth communication, task assignment, and
                progress tracking, ensuring everyone is on the same page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <Image
              src={analytics}
              alt="Real-time Analytics and Insights"
              className="card-img-top"
              priority={true}
            />
            <div className="card-body">
              <h2>Real-time Analytics and Insights</h2>
              <p className="card-text">
                Gain valuable insights into your event's performance. Track
                attendance, monitor ticket sales, analyze attendee engagement,
                and make data-driven decisions to continually improve your
                events.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <Image
              src={integration}
              alt="Integration and Scalability"
              className="card-img-top"
              priority={true}
            />
            <div className="card-body">
              <h2>Integration and Scalability</h2>
              <p className="card-text">
                Seamlessly integrate SgEvents with your existing systems and
                tools. Our flexible platform grows with your needs, allowing you
                to scale effortlessly as your events and business expand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
