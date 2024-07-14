import Home from "./Pages/Home/Home.jsx";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </main>
  );
}

export default App;
