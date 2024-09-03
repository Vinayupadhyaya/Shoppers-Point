import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MaleNavbar from "./MaleNavbar";
function LoggedIn(props) {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  function handleCreateAccount() {
    navigate("/createaccount");
  }
  if (props.log) {
    return null;
  } else {
    return (
      <>
        <button
          onClick={(e) => handleLogin()}
          type="button"
          className="btn btn-dark "
        >
          Login
        </button>

        <button
          onClick={(e) => handleCreateAccount()}
          type="button"
          className="btn btn-dark "
        >
          CreateAccount
        </button>
      </>
    );
  }
}
function Navbar() {
  const [log, setLog] = useState(false);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Shopper's Point
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <MaleNavbar />
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Female
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
              <LoggedIn log={log} />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
