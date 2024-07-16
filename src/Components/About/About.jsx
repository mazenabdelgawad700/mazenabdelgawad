import "./About.css";
import aboutImage from "../../assets/p4.jpg";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="row">
        <div className="about-main-text col-lg-6">
          <h2 className="main-header-title">About</h2>
          <p className="colored-description">
            Hello there! I&apos;m
            <span className="colored-text"> Mazen Abdelgowad</span>, a native
            Cairene
            <br />
            driven by innovation and a passion for creative expression. My
            Journey into the digital realm began in the heart of the bustling
            streets of Cairo City. Growing up surrounded by the dynamic energy
            of the city, I developed a keen interest in harnessing technology to
            improve our digital lives.
          </p>

          <p className="colored-description">
            What sets me apart is not just my technical expertise but also my
            commitment to sharing great ideas that elevate the digital presence
            of my clients I believe that collaboration and creativity are the
            cornerstones of progress, and I am dedicated to bringing a fresh
            perspective to every project I undertake.
          </p>

          <p className="colored-description">
            My academic pursuit led me to Bani Suief National University (BSNU),
            where I delved into the world of arts and letters. It was here that
            my creative instincts flourished, and I discovered the power of
            merging artistic concepts with the limitless possibilities of the
            digital landscape.
          </p>
        </div>

        <div className="about-image col-lg-6">
          <img src={aboutImage} alt="mazen" />
        </div>
      </div>
    </section>
  );
};

export default About;
