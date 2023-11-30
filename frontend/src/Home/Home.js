import React from "react";
import Stitch from "./stitch/Stitch";
import NewCloth from "./newCloth/NewCloth";
import Male from "./male/Male.js";
import Female from "./female/Female.js";
import "./Home.css";

function Home() {
  return (
    <div className="front">
      <Stitch />
      <NewCloth />
      <Male />
      <Female />
    </div>
  );
}

export default Home;
