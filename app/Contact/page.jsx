import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import contact from "@/img/contact.webp";
const page = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Navbar />
      <h1 className="text-center">Get In Touch</h1>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <form
                  action="https://formsubmit.co/e827bd8fd2a95d7e7576547bb1aad862"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="An User Has Just Send You A Message From Sg Event's Contact Form.Please Have A Look!"
                  />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://events.soumwadeepguha.com/ThankYou"
                  />
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Your Email ID
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      name="Name"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Your Message
                    </label>
                    <textarea
                      class="form-control"
                      name="Message"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-success mb-4">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <Image
            src={contact}
            alt="Contact Us"
            className="imgfix"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
