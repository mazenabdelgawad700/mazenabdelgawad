import mazen from "../../assets/p4.jpg";
import pdf from "../../assets/CV.pdf";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="text-container">
        <p className="subtitle">Software Engineer</p>
        <h1 className="overlapping-text">
          HELLO I&apos;M
          <br />
          <span className="colored-text">Mazen Abdelgowad</span>
        </h1>
        <p className="description">
          I believe that collaboration and creativity are the cornerstones of
          progress, and I am dedicated to bringing a fresh perspective to every
          project I undertake.
        </p>
        <a className="download" href={pdf} download="Mazen_Abdelgowad_CV.pdf">
          Get My CV
        </a>
      </div>
      <div>
        <img className="hero-image" src={mazen} alt="mazen" />
      </div>
    </section>
  );
};

export default Hero;
