"use client";

import { useState } from "react";
import { account } from "@/components/AppwriteConfig";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import loginimg from "@/img/login.webp";
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
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Your Email ID
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          email: e.target.value,
                        });
                      }}
                    />
                    <div id="emailHelp" class="form-text">
                      We'll Never Share Your Email With Anyone Else.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Your Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
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
                    class="btn btn-primary"
                    onClick={loginUser}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <Image src={loginimg} alt="Login" className="imgfix" />
        </div>
      </div>
    </div>
  );
};

export default page;