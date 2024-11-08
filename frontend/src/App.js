import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home/Home.js";
import Login from "./login/Login.js";
import Createaccount from "./createaccount/Createaccount.js";
import Femalenext from "./payments/femalenext.js";
import Navbar from "./navbar/Navbar.js";
import Homepage from "./Homepage.js";
import { useState } from "react";
import "./App.css";
function App() {
  const [checkLogin, setCheckLogin] = useState(false);
  const location = useLocation();
  const handleDataFromLogin = (data) => {
    setCheckLogin(data);
  };
  const isHomePage = location.pathname === "/";
  return (
    <div className={`position-relative ${isHomePage ? "home-background" : ""}`}>
      {isHomePage && <div className="overlay"></div>}
      <Navbar showlogin={checkLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login dologin={handleDataFromLogin} />}
        />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/femalenext" element={<Femalenext />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}
export default App;
