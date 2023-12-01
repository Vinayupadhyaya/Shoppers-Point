import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Login from "./login/Login.js";
import Createaccount from "./createaccount/Createaccount.js";
import Femalenext from "./femalenext.js";
import Navbar from "./navbar/Navbar.js";
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
