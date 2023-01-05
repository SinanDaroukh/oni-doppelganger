import Head from "next/head";
import DiscountBanner from "../components/DiscountBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
