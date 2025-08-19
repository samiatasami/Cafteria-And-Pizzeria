import { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import NavBar from "./Pages/NavBar"; 
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import MenuPage from "./Pages/MenuPage";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <NavBar />
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="menu">
        <MenuPage />
      </div>
    </Router>
  );
}

export default App;
