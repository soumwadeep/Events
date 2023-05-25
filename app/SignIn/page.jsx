"use client";

import { useState } from "react";
import { account } from "@/components/AppwriteConfig";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import loginimg from "@/img/login.svg";
const page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Login
  const loginUser = async (e) => {
    e.preventDefault();
    const promise = account.createEmailSession(user.email, user.password);
    promise.then(
      function (response) {
        console.log(response);
        window.location.replace("/Dashboard");
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
        <title>Sign In</title>
      </Head>
      <Navbar />
      <h1 className="text-center">Sign In Now!</h1>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Your Email ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          email: e.target.value,
                        });
                      }}
                    />
                    <div id="emailHelp" className="form-text">
                      We'll Never Share Your Email With Anyone Else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Your Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={loginUser}
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <Image
            src={loginimg}
            alt="Login"
            className="imgfix"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
