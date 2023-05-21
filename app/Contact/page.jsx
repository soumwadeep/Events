import Navbar from "@/components/Navbar";
import Head from "next/head";

const page = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Navbar />
      <h1 className="text-center">Contact Us</h1>
    </div>
  );
};

export default page;
