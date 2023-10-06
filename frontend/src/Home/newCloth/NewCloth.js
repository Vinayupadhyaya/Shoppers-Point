import newcloth from "./newcloth.jpg";
import { useNavigate } from "react-router-dom";
function NewCloth() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/newcloth");
  }
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          src={newcloth}
          class="card-img-top"
          alt="/"
          style={{ height: "200px" }}
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={(e) => handleClick()}
            type="button"
            class="btn btn-primary"
          >
            NewCloth
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewCloth;
