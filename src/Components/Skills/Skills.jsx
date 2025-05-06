import "./Skills.css";

const Skills = () => {
  const skillCategories = {
    sk1: {
      title: "Programming Languages",
      skills: "JavaScript, TypeScript, C#",
    },
    sk2: {
      title: "Frameworks and Libraries",
      skills: "ASP.NET Core, React",
    },
    sk3: {
      title: "Web Technologies",
      skills: "HTML5, CSS3, Bootstrap, SASS",
    },
    sk4: {
      title: "Tools",
      skills: "Git, GitHub, Jest",
    },
    sk5: {
      title: "Code Editors",
      skills: "VS Code, Visual Studio",
    },
    sk6: {
      title: "Programming Concepts",
      skills:
        "OOP, Data Structures, Algorithms, Databases (MongoDB, SQL Server)",
    },
    sk7: {
      title: "Programming Principles",
      skills: "SOLID, Design Patterns, Clean Code, Problem Solving",
    },
    sk8: {
      title: "Soft Skills",
      skills: "Problem-solving, Teamwork, Self-Motivation, Time Management",
    },
  };

  return (
    <section className="skills" id="skills">
      <h1 className="main-header-title">SKILLS</h1>

      <ul className="skills-list colored-description">
        {Object.entries(skillCategories).map(([id, category]) => (
          <li key={id} className="skill-item">
            <span className="skill-category">{category.title}:</span>{" "}
            {category.skills}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
