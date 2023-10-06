import React from "react";
import Stitch from "./stitch/Stitch";
import NewCloth from "./newCloth/NewCloth";
import "./Home.css";

function Home() {
  return (
    <div>
      <div class="front">
        <Stitch />
        <div class="newCloth"></div>
        <NewCloth />
      </div>
    </div>
  );
}

export default Home;
