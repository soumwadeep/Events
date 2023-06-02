"use client";
import { useState } from "react";
import { account, databases } from "@/components/AppwriteConfig";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import loginimg from "@/img/login.svg";
const page = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    try {
      // Login user
      const sessionPromise = account.createEmailSession(email, password);
      const sessionResponse = await sessionPromise;

      // Fetch user details
      const dataPromise = databases.listDocuments(
        "646df0f09aabfb2b250c",
        "646df0f8b0a70785de1f"
      );
      const dataResponse = await dataPromise;
      const user = dataResponse.documents.find(
        (doc) => doc.email === email && doc.password === password
      );

      if (user) {
        const role = user.role;
        console.log("Role: " + role);

        // Redirect based on role
        if (role === "Creator") {
          router.push("/Dashboard/CreatorDashboard");
        } else if (role === "User") {
          router.push("/Dashboard/UserDashboard");
        } else {
          console.log("Invalid role: " + role);
        }
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
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
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
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
