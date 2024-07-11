import "./App.css";
import Home from "./Pages/Home/Home.jsx";

// const setDark = () => {
//   localStorage.setItem("theme", "dark");
//   document.documentElement.setAttribute("data-theme", "dark");
// };

// const setLight = () => {
//   localStorage.setItem("theme", "light");
//   document.documentElement.setAttribute("data-theme", "light");
// };

function App() {
  return (
    <main>
      <Home />
    </main>
  );
}

export default App;
