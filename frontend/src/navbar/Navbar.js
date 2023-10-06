import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              HomeTaiorss
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    ContactUs
                  </a>
                </li>
              </ul>
              <div class="d-flex">
                <button
                  onClick={(e) => handleLogin()}
                  type="button"
                  class="btn btn-dark"
                >
                  Login
                </button>
                <button
                  onClick={(e) => handleCreateAccount()}
                  type="button"
                  class="btn btn-dark"
                >
                  CreateAccount
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
