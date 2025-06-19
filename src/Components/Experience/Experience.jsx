import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: "exp1",
      company: "GDSC EELU-Bani Suief",
      position: "HR Coordinator",
      period: "February 2024 – September 2024",
      responsibilities: {
        resp1:
          "Organized and managed groups of participants for various events and programs.",
        resp2:
          "Played a key role in coordinating the Mena TechSkills Initiative by Google, providing AI and Cloud courses to students.",
        resp3:
          "Created and managed WhatsApp groups to handle student queries, ensuring smooth communication and a positive learning experience.",
        resp4:
          "Collaborated with team members to ensure efficient event execution and course facilitation, supporting hundreds of students.",
      },
    },
    {
      id: "exp2",
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
      id: "exp3",
      company: "ECIT",
      position: "Software Engineer",
      period: "August 2024 – June 2025",
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
