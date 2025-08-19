import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar"; 
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import MenuPage from "./Pages/MenuPage";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="pt-0">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutUs/>} />

          <Route path="/menu" element={<MenuPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
