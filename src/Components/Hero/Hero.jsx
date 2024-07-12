import mainImage from "../../assets/p4.jpg";
import pdf from "../../assets/CV.pdf";
import "./Hero.css";
import { FaDownload } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="text-container">
        <p className="subtitle mb-0">Software Engineer</p>
        <h1 className="overlapping-text">
          HELLO I<span className="colored-text">&apos;</span>M
          <br />
          <span className="main-colored-text">Mazen Abdelgowad</span>
        </h1>
        <p className="description">
          I believe that collaboration and creativity are the cornerstones of
          progress, and I am dedicated to bringing a fresh perspective to every
          project I undertake.
        </p>
        <a className="download" href={pdf} download="Mazen_Abdelgowad_CV.pdf">
          CV
          <FaDownload />
        </a>
      </div>

      <div className="hero-image-container">
        <img className="hero-image" src={mainImage} alt="mazen" />
      </div>
    </section>
  );
};

export default Hero;
