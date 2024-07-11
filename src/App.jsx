import DarkModeButton from "./Components/DarkModeButton/DarkModeButton.jsx";
import Home from "./Pages/Home/Home.jsx";
import "./App.css";

function App() {
  return (
    <main>
      <DarkModeButton />
      <div className="container">
        <Home />
      </div>
    </main>
  );
}

export default App;
