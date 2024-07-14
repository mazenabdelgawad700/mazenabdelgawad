import About from "../../Components/About/About";
import Hero from "../../Components/Hero/Hero";
import Portfolio from "../../Components/Portfolio/Portfolio";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
};

export default Home;
