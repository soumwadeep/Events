import Navbar from "@/components/Navbar";
import Head from "next/head";

const page = () => {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Navbar />
      <h1 className="text-center">Sign Up Now!</h1>
    </div>
  );
};

export default page;
