import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Experience from "../../Components/Experience/Experience";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Portfolio from "../../Components/Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
