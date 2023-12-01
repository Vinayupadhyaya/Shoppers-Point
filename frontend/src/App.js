import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Login from "./login/Login.js";
import Createaccount from "./createaccount/Createaccount.js";
import Femalenext from "./femalenext.js";
import Navbar from "./navbar/Navbar.js";
<<<<<<< HEAD
=======
// import { useState } from "react";
>>>>>>> cf6aa47f740247d65fc80cdaf26db0aa2a5a5b91
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/femalenext" element={<Femalenext />} />
      </Routes>
    </div>
  );
}

export default App;
