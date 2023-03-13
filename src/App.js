import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Register />
    </div>
    // <Router>
    //   <Routes>
    //     <Route index element={<Register />} />
    //     <Route path="login" element={<Login />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
