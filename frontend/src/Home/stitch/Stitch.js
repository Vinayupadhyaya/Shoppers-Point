import scissor from "./scissor.jpg";
import { useNavigate } from "react-router-dom";
function Stitch() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/newcloth");
  }
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={scissor}
          className="card-img-top"
          alt="..."
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={(e) => handleClick()}
            type="button"
            className="btn btn-primary"
          >
            Stitch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stitch;
