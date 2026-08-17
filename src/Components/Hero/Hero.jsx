import mainImage from "../../assets/heroImage.png";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="header-title-eyebrow mb-1">Software Engineer</span>
          <h1 className="hero-name">
            Mazen
            <br />
            Abdelgawad
          </h1>

          <blockquote className="hero-statement">
            I believe power is earned, not given.
          </blockquote>

          <div className="hero-intro">
            <p>
              I&apos;m Mazen Abdelgawad, a software engineer driven by the
              pursuit of mastery - in engineering, in discipline, and in the
              things I choose to build.
            </p>
            <p>
              I don&apos;t want to simply write software. I want to become
              someone capable of building things that matter, carrying
              responsibility, and earning the power that comes with being
              exceptionally good at what I do.
            </p>
          </div>

          <div className="hero-cta">
            <a href="#portfolio" className="hero-cta-primary">
              View My Work
            </a>
            <div className="hero-cta-secondary">
              <a
                href="mailto:mazenabdelgawad700@gmail.com"
                aria-label="Contact me"
                className="hero-social-link"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/mazenabdelgawad700"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hero-social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/mazen-abdelgawad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hero-social-link"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="hero-portrait-frame">
            <img
              src={mainImage}
              alt="Mazen Abdelgawad - Software Engineer"
              className="hero-portrait-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
