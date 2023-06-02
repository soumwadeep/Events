"use client";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import signup from "@/img/signup.svg";
import { useState } from "react";
import { account, databases } from "@/components/AppwriteConfig";

const page = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    role: "User",
    city: "",
    state: "",
    zip: "",
  });

  // Register
  const registerUser = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    for (const key in user) {
      if (user[key] === "") {
        alert("Please Fill In All Fields!");
        return;
      }
    }

    const userId = user.phone;
    try {
      const response = await account.create(
        userId,
        user.email,
        user.password,
        user.name
      );

      alert(
        "Welcome To SgEvents! You Are Now Registered! Please Sign In To Our Platform To Continue..."
      );

      const docId = Date.now().toString();
      const documentData = {
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password,
        address: user.address,
        role: user.role, // Set the role here
        city: user.city,
        state: user.state,
        zip: user.zip,
      };

      const promise = databases.createDocument(
        "646df0f09aabfb2b250c",
        "646df0f8b0a70785de1f",
        docId,
        documentData
      );

      console.log("Data", documentData);

      promise.then(
        function (response) {
          console.log(response); // Success
          window.location.replace("/SignIn");
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
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
                  <div className="col-6">
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
                  <div className="col-6">
                    <label htmlFor="inputRole" className="form-label">
                      Role
                    </label>
                    <select
                      className="form-control"
                      id="inputRole"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          role: e.target.value,
                        });
                      }}
                      value={user.role}
                    >
                      <option value="User">User</option>
                      <option value="Creator">Creator</option>
                    </select>
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
