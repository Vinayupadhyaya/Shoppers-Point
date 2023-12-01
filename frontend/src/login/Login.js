import axios from "axios";
import React from "react";
import { useState } from "react";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // here is the submit funtion for authenticate login

  async function handleSubmit(event) {
    event.preventDefault();
    let data = { email, password };
    console.log({ data });

    // axios for authentication
    let res = await axios
      .get(
        "http://127.0.0.1:8000/",
        {},
        {
          auth: {
            emailid: data.email,
            password: data.password,
          },
        }
      )
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });

    // on successful authentication the status is 200

    if (res.status === 200) {
      console.log("Authenticateds");
    }
  }
  // this it the return funtion
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            style={{ width: "400px" }}
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Login;
