import { Routes, Route } from "react-router-dom";
import NewClothPage from "./newClothpage/NewClothPage.js";
import StitchPage from "./stitchPage/StitchPage.js";
import Home from "./Home/Home.js";
import Login from "./login/Login.js";
import Createaccount from "./createaccount/Createaccount.js";
import Navbar from "./navbar/Navbar.js";
import { useState } from "react";
function App() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <Navbar login={login} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newcloth" element={<NewClothPage />} />
        <Route path="/stitch" element={<StitchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<Createaccount />} />
      </Routes>
    </div>
  );
}

export default App;
