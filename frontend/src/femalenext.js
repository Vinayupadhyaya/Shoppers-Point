import React, { useEffect, useState } from "react";
import "./femalenext.css";
export default function MyApp() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  return (
    <div className="box">
      {data.map((person) => (
        <li key={person.id}>
          <div className="card">
            <img
              src={person.image}
              className="card-img-top"
              alt="/"
              style={{ height: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{person.title}</h5>
              <p className="card-text">{person.description}</p>
              <a href="/" className="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
