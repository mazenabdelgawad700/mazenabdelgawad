import "./About.css";
import { FaMapMarkerAlt, FaCode, FaCompass } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about" aria-label="About Me">
      <div className="about-container">
        {/* Header Eyebrow */}
        <div className="about-header">
          <span className="about-eyebrow">A Little About Me</span>
        </div>

        <div className="about-grid">
          {/* Main narrative block */}
          <div className="about-content">
            <div className="about-narrative">
              <p>
                I enjoy building software, especially when the problem is complicated enough that figuring it out becomes half the fun.
              </p>
              <p>
                I&apos;m naturally curious and tend to go down rabbit holes whenever something catches my attention - sometimes technical, sometimes completely unrelated. I have a lot of interests and probably too many things I want to learn.
              </p>
              <p>
                Outside of engineering, I&apos;m usually somewhere between the gym, a YouTube rabbit hole, a good movie, a video game, or whatever has caught my interest that week.
              </p>
            </div>

            {/* Closing Line */}
            <div className="about-closing">
              <p className="about-closing-text">
                Still learning. Still building. Still curious.
              </p>
            </div>
          </div>

          {/* Sidebar Metadata block */}
          <aside className="about-sidebar" aria-label="Professional Details">
            <div className="about-sidebar-card">
              <div className="metadata-item">
                <div className="metadata-icon" aria-hidden="true"><FaMapMarkerAlt /></div>
                <div className="metadata-info">
                  <span className="metadata-label">Based in</span>
                  <span className="metadata-value">Cairo, Egypt</span>
                </div>
              </div>

              <div className="metadata-item">
                <div className="metadata-icon" aria-hidden="true"><FaCode /></div>
                <div className="metadata-info">
                  <span className="metadata-label">Currently</span>
                  <span className="metadata-value">Software Engineering</span>
                </div>
              </div>

              <div className="metadata-item">
                <div className="metadata-icon" aria-hidden="true"><FaCompass /></div>
                <div className="metadata-info">
                  <span className="metadata-label">Always</span>
                  <span className="metadata-value">Learning something new</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
