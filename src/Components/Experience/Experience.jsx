import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: "exp1",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      position: "Web Development Intern",
      period: "April 2024 – October 2024",
      responsibilities: {
        resp1:
          "Participated in a government-sponsored initiative to advance web development skills.",
        resp2:
          "Gained hands-on experience building web applications using ASP.NET Core Web API, ASP.NET MVC, and SQL Server.",
        resp3:
          "Contributed to the development of a Real Estate application as a graduation project, focusing on database design, backend logic, and API development.",
        resp4:
          "Worked with a team to implement modern web development practices, delivering functional and scalable applications.",
      },
    },
    {
      id: "exp2",
      company: "ECIT",
      position: "Backend Software Engineer",
      period: "August 2024 – June 2025 | Cairo, Egypt",
      responsibilities: {
        resp1:
          "Architected and implemented robust RESTful APIs following industry best practices to support scalable web applications.",
        resp2: "Diagnosed and resolved complex server and database issues.",
        resp3:
          "Engineered efficient data transformation processes to enhance data visualization and analytics capabilities for stakeholders.",
        resp4:
          "Managed critical backend infrastructure including API maintenance, database optimization.",
      },
    },
    {
      id: "exp3",
      company: "NDS",
      position: "Backend Software Engineer (Project Based)",
      period: "July 2025 – October 2025 | Cairo, Egypt",
      responsibilities: {
        resp1:
          "Developed and maintained backend services using ASP.NET Core Web API, supporting core business workflows with high availability.",
        resp3:
          "Collaborated with cross-functional teams to design and document a modular backend architecture.",
        resp4:
          "Improved backend reliability by implementing structured validation, centralized error handling, and participating in code reviews, reducing recurring production issues.",
      },
    },
  ];

  return (
    <section className="experience" id="experience">
      <h1 className="section-title main-header-title">Work Experience</h1>

      {experiences.map((exp) => (
        <div key={exp.id} className="experience-item">
          <div className="experience-header">
            <h2 className="company-name colored-text">
              {exp.company} <span className="position">– {exp.position}</span>
            </h2>
            <p className="period colored-description">{exp.period}</p>
          </div>

          {Object.keys(exp.responsibilities).length > 0 && (
            <ul className="responsibilities-list colored-description">
              {Object.entries(exp.responsibilities).map(
                ([id, responsibility]) => (
                  <li key={exp.id + "-" + id}>{responsibility}</li>
                )
              )}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;
