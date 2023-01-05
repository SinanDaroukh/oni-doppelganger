import Head from "next/head";
import DiscountBanner from "../DiscountBanner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-zinc-800">
      <Head>
        <title>ONI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DiscountBanner />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
