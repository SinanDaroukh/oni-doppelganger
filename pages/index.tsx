import type { NextPage } from "next";
import Head from "next/head";
import DiscountBanner from "../components/DiscountBanner";
import Navbar from "../components/Navbar";
import VideoBanner from "../components/VideoBanner";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-800">
      <Head>
        <title>ONI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DiscountBanner />
      <Navbar />
      <VideoBanner />
      <Footer />
    </div>
  );
};

export default Home;
