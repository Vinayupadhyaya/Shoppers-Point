import scissor from "./scissor.jpg";
function Stitch() {
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
          <h5 className="card-title">Stitch Male Clothes</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" className="btn btn-primary">
            Stich Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stitch;
