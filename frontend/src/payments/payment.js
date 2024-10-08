import { useNavigate } from "react-router-dom";
export default function Payment(props) {
  const navigate = useNavigate();
  const data = {
    key: props.key,
    image: props.image,
    title: props.title,
    description: props.description,
    price: props.price,
  };
  function handleClick() {
    navigate("/homepage", { state: data });
  }
  return (
    <>
      <li key={props.key}>
        <div className="card">
          <img
            src={props.image}
            className="card-img-top"
            alt="/"
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <button onClick={handleClick} className="btn btn-primary">
              Rs.{props.price}
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
