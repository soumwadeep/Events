import Image from "next/image";
import thanks from "@/img/thanks.webp";
import Head from "next/head";
import Navbar from "@/components/Navbar";
const page = () => {
  return (
    <div>
      <Head>
        <title>Thank You</title>
      </Head>
      <Navbar />
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Thank You</h1>
                <h3>
                  Thanks A Lot For Contacting Us.We Will Soon Contact You And
                  Clear Your Query!
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <Image
            src={thanks}
            alt="Thank You"
            className="imgfix"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
