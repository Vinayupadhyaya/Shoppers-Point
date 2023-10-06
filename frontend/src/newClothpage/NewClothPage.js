import React from "react";
import Female from "./female/Female.js";
import Male from "./male/Male.js";

function NewClothpage() {
  return (
    <div>
      <div class="front">
        <Female />
        <div class="newCloth">
          <Male />
        </div>
      </div>
    </div>
  );
}

export default NewClothpage;
