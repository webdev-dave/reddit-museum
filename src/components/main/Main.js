import { useEffect } from "react";
import { selectLoadedStatus } from "./mainSlice";
import { useSelector } from "react-redux";
import TileContainer from "../tile/TileContainer";

const Main = () => {
  const isLoaded = useSelector(selectLoadedStatus);

  return (
    <section className="posts-section">
      <TileContainer />
    </section>
  );
};

export default Main;
