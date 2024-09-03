import React, { useEffect, useState } from "react";
import Payment from "./payment.js";
import "./femalenext.css";
export default function MyApp() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }

  return (
    <div className="box">
      {data.map((person) => (
        <Payment
          key={person.id}
          image={person.image}
          title={person.title}
          description={person.description}
          price={person.price}
        />
      ))}
    </div>
  );
}
