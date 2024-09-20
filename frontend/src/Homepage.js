import React, { useEffect } from "react";
import { API_URL } from "./config/index.js";
import { useLocation } from "react-router-dom";
export default function Homepage() {
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    <section>
      <div className="product" key={data.key}>
        <img src={data.image} alt="The cover of Stubborn Attachments" />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <p>{data.description}</p>
          <h5>{data.price}</h5>
        </div>
      </div>
      <form
        action={`${API_URL}api/stripe/create-checkout-session`}
        method="POST"
      >
        <button type="submit">Buy</button>
      </form>
    </section>
  );
}
