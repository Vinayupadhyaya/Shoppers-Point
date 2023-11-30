import newcloth from "./newcloth.jpg";
function NewCloth() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={newcloth}
          className="card-img-top"
          alt="/"
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Female Clothes Stitching</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" className="btn btn-primary">
            Stitch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewCloth;
