import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar({ login }) {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  function handleCreateAccount() {
    navigate("/createaccount");
  }
  return (
    <div>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              HomeTaiorss
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    ContactUs
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                {login === true ? (
                  " "
                ) : (
                  <button
                    onClick={(e) => handleLogin()}
                    type="button"
                    className="btn btn-dark"
                  >
                    Login
                  </button>
                )}

                <button
                  onClick={(e) => handleCreateAccount()}
                  type="button"
                  className="btn btn-dark"
                >
                  CreateAccount
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {login === true ? <h2>welcome to the home page</h2> : " "}
    </div>
  );
}

export default Navbar;
