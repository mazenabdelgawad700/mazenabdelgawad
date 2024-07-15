import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Portfolio from "../../Components/Portfolio/Portfolio";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="container">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
