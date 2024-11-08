import React, { useEffect, useState } from "react";
import Payment from "./payment.js";
import "./femalenext.css";
export default function MyApp() {
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setFilteredData(
          json.filter((item) => item.category === "women's clothing")
        );
      });
  }

  return (
    <div className="box">
      {filteredData.map((person) => (
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
