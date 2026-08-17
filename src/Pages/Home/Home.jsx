import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";

const Home = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default Home;

