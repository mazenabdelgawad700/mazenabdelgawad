import "./Portfolio.css";
import project1 from "../../assets/project2.jpg";
import project2 from "../../assets/image.png";
import project3 from "../../assets/image2.png";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      prjectName: "Blog Application",
      image: project1,
      link: "https://github.com/mazenabdelgawad700/Blog",
    },
    {
      id: 2,
      prjectName: "Cook it Eat it",
      image: project2,
      link: "https://github.com/mazenabdelgawad700/CookItEatIt",
    },
    {
      id: 2,
      prjectName: "Ecommerce",
      image: project3,
      link: "https://github.com/mazenabdelgawad700/EcommerceSystem",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-text mb-5">
        <h2 className="main-header-title">Portfolio</h2>
        <p className="colored-description">
          I&apos;ve worked on various projects over the years, showcasing my
          <br />
          skills and experiences in various fields. Some of my most recent
          projects include:
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {projects.map((project) => (
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

export default Portfolio;
