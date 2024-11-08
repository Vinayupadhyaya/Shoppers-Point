import { API_URL } from "./config/index.js";
import { useLocation } from "react-router-dom";
export default function Homepage() {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>{data.title}</h1>
      </header>
      <div className="row">
        {/* Product Image Section */}
        <div className="col-md-3">
          <img
            src={data.image} // Replace with actual product image
            className="img-fluid" // Makes image responsive
            alt="Product"
          />
        </div>
        {/* Product Details Section */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
              <div className="mt-auto">
                <h3 className="text-success">{data.price}</h3>
                <form
                  method="POST"
                  action={`${API_URL}api/stripe/create-checkout-session`}
                >
                  <button type="submit" className="btn btn-primary btn-block">
                    Buy Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
