import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import projectsData from "../../data/projects";

const Projects = () => {
  const projects = projectsData || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    // Ensure activeIndex is within bounds if projects change
    if (activeIndex >= projects.length) {
      setActiveIndex(Math.max(0, projects.length - 1));
    }
  }, [activeIndex, projects.length]);

  const prev = () => {
    setActiveIndex((i) =>
      projects.length ? (i - 1 + projects.length) % projects.length : 0,
    );
  };

  const next = () => {
    setActiveIndex((i) => (projects.length ? (i + 1) % projects.length : 0));
  };

  const handleKeyDown = (e) => {
    // Only respond when the section is focused
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  };

  // Touch handlers for swipe on mobile
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 50; // minimal swipe
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    touchStartX.current = null;
  };

  if (!projects.length) {
    return (
      <section className="projects" id="projects">
        <div className="header-title-eyebrow projects-header">
          <span>Projects</span>
        </div>
        <p className="projects-empty">No projects to display yet.</p>
      </section>
    );
  }

  const active = projects[activeIndex];

  const counter = (n) => String(n + 1).padStart(2, "0");

  return (
    <section
      className="projects"
      id="projects"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Projects"
    >
      <div className="projects-inner">
        <div className="projects-header-row">
          <span className="header-title-eyebrow">Projects</span>
          <div className="projects-counter" aria-hidden>
            {counter(activeIndex)}/{String(projects.length).padStart(2, "0")}
          </div>
        </div>

        <div className="projects-body">
          <div className="projects-media">
            {active.media && active.media.type === "image" ? (
              <img
                src={active.media.src}
                alt={active.media.alt || active.title}
                loading="lazy"
                className="projects-media-img"
              />
            ) : (
              <div className="projects-media-fallback" aria-hidden>
                <span className="projects-media-fallback-label">
                  {active.title}
                </span>
              </div>
            )}
          </div>

          <div className="projects-details">
            <h3 className="projects-title">{active.title}</h3>
            {active.type && <div className="projects-type">{active.type}</div>}
            <p className="projects-desc">{active.description}</p>

            <div className="projects-meta">
              <div className="projects-techs">
                {active.technologies && active.technologies.join(" · ")}
              </div>

              <div className="projects-actions">
                {active.githubUrl && (
                  <a
                    className="projects-cta"
                    href={active.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}

                <div className="projects-nav">
                  <button
                    className="projects-nav-btn"
                    onClick={prev}
                    aria-label="Previous project"
                    disabled={projects.length <= 1}
                  >
                    ←
                  </button>
                  <button
                    className="projects-nav-btn"
                    onClick={next}
                    aria-label="Next project"
                    disabled={projects.length <= 1}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;