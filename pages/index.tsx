import type { NextPage } from "next";
import VideoBanner from "../components/VideoBanner";

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-800">
      <VideoBanner />
    </div>
  );
};

export default Home;
