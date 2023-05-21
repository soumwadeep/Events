import Image from "next/image";
import event1 from "@/img/event1.webp";
import event2 from "@/img/event2.webp";
import event3 from "@/img/event3.webp";
import event4 from "@/img/event4.webp";
import event5 from "@/img/event5.webp";
import logo from "@/img/logo.webp";
const page = () => {
  return (
    <div className="Home">
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <div className="text-center mob-head">
                  <Image src={logo} alt="Logo" className="mob-logo" />
                  <h1>Sg Events</h1>
                </div>
                <h2 style={{ color: "#d905dc" }}>
                  Unleash the Magic of Extraordinary Events
                </h2>
                <h5>
                  At SgEvents, we believe that every moment is an opportunity to
                  create something extraordinary. We are passionate about
                  turning your vision into a reality, crafting events that will
                  leave a lasting impact on you and your guests.
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
                  Experience the Art of Celebration
                </h2>
                <h5>
                  From lavish weddings to corporate soirées and everything in
                  between, we specialize in crafting exceptional experiences
                  that go beyond the ordinary. Our team of creative experts will
                  work closely with you to understand your desires, infuse your
                  personality, and transform your event into an immersive and
                  unforgettable celebration.
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
                  Where Imagination Takes Center Stage
                </h2>
                <h5>
                  At SgEvents, we dare to dream big. Our innovative approach and
                  outside-the-box thinking ensure that your event will be a true
                  reflection of your style and taste. From breathtaking venues
                  and awe-inspiring decorations to mesmerizing entertainment and
                  exquisite cuisine, we will weave together every element
                  seamlessly, creating a symphony of enchantment that will
                  captivate all who attend.
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
                  When you choose SgEvents, you gain a trusted partner dedicated
                  to exceeding your expectations. With our meticulous attention
                  to detail, impeccable organizational skills, and passion for
                  perfection, we leave no stone unturned in delivering flawless
                  execution. Sit back, relax, and let us take care of every
                  aspect of your event, allowing you to be fully present and
                  enjoy every magical moment.
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
