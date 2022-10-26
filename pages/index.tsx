import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DiscountBanner from "../components/DiscountBanner";
import Navbar from "../components/Navbar";
import VideoBanner from "../components/VideoBanner";

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

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
