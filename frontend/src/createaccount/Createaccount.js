import React from "react";
// import axios from "axios";
import { useState } from "react";
function Createaccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function saveUser() {
    console.warn(name, email, password);
    let data = { name, email, password };
    fetch("http://127.0.0.1:8000/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp);
      });
    });
  }
  return (
    <div>
      <form action="">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.vlaue);
            }}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.vlaue);
            }}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.vlaue);
            }}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" onClick={saveUser} class="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}

export default Createaccount;
