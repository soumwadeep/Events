"use client";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import signup from "@/img/signup.webp";
import { useState } from "react";
import { account } from "@/components/AppwriteConfig";

const page = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  //Register
  const registerUser = async (e) => {
    e.preventDefault();
    const userId = user.phone;
    const promise = account.create(
      userId,
      user.email,
      user.password,
      user.name
    );
    promise.then(
      function (response) {
        console.log(response);
        alert(
          "Welcome To SgEvents!You Are Now Registered!Please Sign In To Our Platform To Continue..."
        );
        window.location.replace("/SignIn");
      },
      function (error) {
        console.log(error);
        alert(error);
      }
    );
  };

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
                <form className="row g-3" method="post">
                  <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPhone" className="form-label">
                      Mobile No.
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPhone"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          phone: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          address: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          city: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputState"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          state: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputZip"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          zip: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-12"></div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary mb-4"
                      onClick={registerUser}
                    >
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
