import "./Portfolio.css";
import BlogApp from "../../assets/p4.jpg";
import project2 from "../../assets/p4.jpg";
import project3 from "../../assets/p4.jpg";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      prjectName: "Blog App",
      image: BlogApp,
      link: "https://github.com/mazenabdelgowad/AI-portfolio",
    },
    {
      id: 2,
      prjectName: "Project2",
      image: project2,
      link: "https://github.com/mazenabdelgowad/AI-portfolio",
    },
    {
      id: 3,
      prjectName: "Project3",
      image: project3,
      link: "https://github.com/mazenabdelgowad/AI-portfolio",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-text mb-5">
          <h2 className="main-header-title">Portfolio</h2>
          <p className="colored-description">
            I&apos;ve worked on various projects over the years, showcasing my
            <br />
            skills and experiences in various fields. Some of my most recent
            projects include:
          </p>
        </div>

        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            {projects.map((project) => (
              <div className="carousel-item active" key={project?.id}>
                <img
                  src={project?.image}
                  className="d-block"
                  alt={project?.prjectName}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{project?.prjectName}</h5>
                  <a
                    href={project?.link}
                    target="_blank"
                    className="portfolio-link"
                  >
                    See Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
