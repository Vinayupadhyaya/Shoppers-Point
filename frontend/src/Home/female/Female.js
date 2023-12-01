import React from "react";
import female from "./female.jpg";
import { useNavigate } from "react-router-dom";
function Female() {
  const navigate = useNavigate();
  function handleCreateAccount() {
    navigate("/femalenext");
  }
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={female}
          className="card-img-top"
          alt="/"
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Female NewClothes</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button onClick={handleCreateAccount} className="btn btn-primary">
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Female;
