import "./Projects.css";
import project1 from "../../assets/image.png";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      projectName: "Cook it Eat it",
      image: project1,
      link: "https://github.com/mazenabdelgawad700/CookItEatIt",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="header-title-eyebrow projects-header">
        <span className="projects-eyebrow">Projects</span>
      </div>

      <p className="projects-description">
        I&apos;ve worked on various projects over the years, showcasing my
        <br />
        skills and experiences in various fields. Some of my most recent
        projects include:
      </p>

      <div className="container">
        <div className="row justify-content-center">
          {myProjects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4 d-flex">
              <div className="card shadow-sm flex-fill">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.projectName}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">
                    {project.projectName}
                  </h5>
                  <a
                    href={project.link}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
