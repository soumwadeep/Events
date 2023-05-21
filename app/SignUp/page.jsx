import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import signup from "@/img/signup.webp";

const page = () => {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Navbar />
      <h1 className="text-center">Sign Up Now!</h1>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputPhone" className="form-label">
                      Mobile No.
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPhone"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputCity" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="inputState" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputState"
                    />
                  </div>
                  <div className="col-md-2">
                    <label for="inputZip" className="form-label">
                      Zip
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-12"></div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary mb-4">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <Image src={signup} alt="Sign Up" className="imgfix" />
        </div>
      </div>
    </div>
  );
};

export default page;
