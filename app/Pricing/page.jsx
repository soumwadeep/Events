import Navbar from "@/components/Navbar";
import Head from "next/head";

const page = () => {
  return (
    <div>
      <Head>
        <title>Our Plans</title>
      </Head>
      <Navbar />
      <h1 className="text-center">Our Plans</h1>
    </div>
  );
};

export default page;
