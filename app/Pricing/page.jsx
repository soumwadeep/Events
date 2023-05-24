import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import free from "@/img/free.webp";
import premium from "@/img/premium.webp";
const page = () => {
  return (
    <div>
      <Head>
        <title>Our Plans</title>
      </Head>
      <Navbar />
      <h1 className="text-center">Our Plans</h1>
      <div className="row">
        <div className="col-sm">
          <div className="card plans">
            <Image
              src={free}
              alt="Free Plan"
              className="card-img-top"
              priority={true}
            />
            <div className="card-body">
              <h2>Free</h2>
              <ul className="card-text">
                <li>
                  <i className="fa-solid fa-check ticks"></i>&nbsp; Event
                  Creation and Management: Effortlessly create and manage
                  events, stress-free!
                </li>
                <li>
                  <i className="fa-solid fa-check ticks"></i>&nbsp; Basic RSVP
                  Management: Keep track of guest responses and manage RSVPs
                  like a pro.
                </li>
                <li>
                  <i className="fa-solid fa-check ticks"></i>&nbsp; Standard
                  Ticketing: Sell tickets online and manage inventory
                  hassle-free.
                </li>
                <li>
                  <i className="fa-solid fa-check ticks"></i>&nbsp; Limited
                  Event Website Customization: Personalize your event website
                  and make it stand out, even with limited options.
                </li>
                <li>
                  <i className="fa-solid fa-check ticks"></i>&nbsp; Email
                  Support: Our support team is just an email away to provide you
                  with timely assistance.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <Image
              src={premium}
              alt="Premium Pack"
              className="card-img-top"
              priority={true}
            />
            <div className="card-body">
              <h2>Premium</h2>
              <ul className="card-text">
                <li>
                  <i className="fa-solid fa-check ticks"></i>&nbsp; Advanced
                  Event Management: Unleash the full potential of your events
                  with advanced features that make planning a breeze.
                </li>
                <li>
                  <i className="fa-solid fa-check ticks"></i>&nbsp; Robust RSVP
                  and Guest Management: Seamlessly handle guest lists, VIP
                  attendees, and check-ins like a pro.
                </li>
                <li>
                  <i className="fa-solid fa-check ticks"></i>&nbsp; Premium
                  Ticketing and Payment Options: Boost your ticket sales with
                  advanced options like discounts and secure payment gateways.
                </li>
                <li>
                  <i className="fa-solid fa-check ticks"></i>&nbsp; Fully
                  Customizable Event Websites: Create stunning event websites
                  that leave a lasting impression on your attendees.
                </li>
                <li>
                  <i className="fa-solid fa-check ticks"></i>&nbsp; Priority
                  Support: Enjoy priority access to our dedicated support team
                  to ensure a smooth event planning experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
