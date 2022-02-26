import type { NextPage } from "next";
import dynamic from "next/dynamic";

const BunnyComponentWithNoSSR = dynamic(() => import("components/Bunny"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>PixiJs testing page</h1>
      <BunnyComponentWithNoSSR />
    </div>
  );
};

export default Home;
