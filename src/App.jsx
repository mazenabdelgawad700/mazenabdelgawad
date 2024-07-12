import { Route, Routes } from "react-router-dom";
// import DarkModeButton from "./Components/DarkModeButton/DarkModeButton.jsx";
import Home from "./Pages/Home/Home.jsx";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";

function App() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact index element={<Home />} />
        </Routes>
        <About />
      </div>
    </main>
  );
}

export default App;
