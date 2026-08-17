import { useState, useRef } from "react";
import "./Experience.css";

const experiences = {
  ECIT: {
    company: "ECIT",
    role: "Backend Software Engineer",
    location: "Cairo, Egypt",
    startDate: "Oct 2024",
    endDate: "Jun 2025",
    description: "SaaS-based ERP platform supporting business operations across accounting, HR, payroll, inventory, school management, reporting, and user management.",
    previousRole: {
      role: "Backend Software Engineering Intern",
      startDate: "Jul 2024",
      endDate: "Sep 2024"
    },
    achievements: [
      "Joined the backend team as an intern and transitioned into a full-time engineering role after completing the three-month internship.",
      "Built and maintained RESTful APIs within a Clean Architecture-based backend using ASP.NET Core, Dapper, and SQL Server for a multi-tenant SaaS ERP platform.",
      "Implemented permission-aware hierarchical navigation, determining accessible application areas based on tenant, user identity, roles, and authorization rules.",
      "Investigated and resolved backend issues across authentication, authorization, localization, database behavior, and application logic, including production issues.",
      "Improved database-backed operations through targeted SQL optimization, indexing, caching, and removal of unnecessary database work.",
      "Took responsibility for internal API deployments and contributed shared backend functionality, including bulk-delete operations and structured database error handling.",
      "Worked on security-sensitive functionality involving access control and encryption/decryption requirements, while also investigating issues in shared .NET infrastructure code."
    ],
    technologies: [
      "ASP.NET Core",
      "C#",
      "Dapper",
      "SQL Server",
      "Clean Architecture",
      "Multi-tenancy",
      "Authentication",
      "Authorization",
      "Encryption",
      "REST APIs"
    ]
  }
};

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState("ECIT");
  const tabRefs = useRef({});
  const companyKeys = Object.keys(experiences);

  const activeExp = experiences[activeCompany];

  const handleKeyDown = (e, index) => {
    let newIndex = index;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      newIndex = (index + 1) % companyKeys.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      newIndex = (index - 1 + companyKeys.length) % companyKeys.length;
    } else {
      return;
    }

    const nextCompany = companyKeys[newIndex];
    setActiveCompany(nextCompany);
    tabRefs.current[nextCompany]?.focus();
  };

  return (
    <section className="experience" id="experience" aria-label="Work Experience">
      <div className="experience-container">
        {/* Section Title */}
        <div className="experience-header-section">
          <span className="experience-eyebrow">Work Experience</span>
        </div>

        <div className="experience-grid">
          {/* Tab Selector List */}
          <div
            className="experience-tabs"
            role="tablist"
            aria-label="Experience Selector"
          >
            {companyKeys.map((companyKey, index) => {
              const isActive = activeCompany === companyKey;
              return (
                <button
                  key={companyKey}
                  ref={(el) => (tabRefs.current[companyKey] = el)}
                  role="tab"
                  id={`tab-${companyKey}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${companyKey}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`experience-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveCompany(companyKey)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  {experiences[companyKey].company}
                </button>
              );
            })}
          </div>

          {/* Active Panel Content */}
          <div
            className="experience-panel"
            role="tabpanel"
            id={`panel-${activeCompany}`}
            aria-labelledby={`tab-${activeCompany}`}
            tabIndex={0}
          >
            {/* Header info */}
            <div className="experience-panel-header">
              <h3 className="experience-role">
                {activeExp.role}{" "}
                <span className="experience-at">@ {activeExp.company}</span>
              </h3>
              <p className="experience-dates-loc">
                {activeExp.startDate} - {activeExp.endDate} | {activeExp.location}
              </p>
            </div>

            {/* Subordinate Internship progression */}
            {activeExp.previousRole && (
              <div className="experience-internship-sub">
                <span className="internship-arrow" aria-hidden="true">↳</span>
                <div className="internship-details">
                  <span className="internship-role">
                    Promoted from {activeExp.previousRole.role}
                  </span>
                  <span className="internship-dates">
                    {activeExp.previousRole.startDate} - {activeExp.previousRole.endDate}
                  </span>
                </div>
              </div>
            )}

            {/* Company Context */}
            {activeExp.description && (
              <p className="experience-desc">{activeExp.description}</p>
            )}

            {/* Achievements Bullets */}
            <ul className="experience-achievements">
              {activeExp.achievements.map((bullet, idx) => (
                <li key={idx} className="achievement-item">
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Technology Tags */}
            {activeExp.technologies && (
              <div className="experience-tags" aria-label="Technologies used">
                {activeExp.technologies.map((tag) => (
                  <span key={tag} className="experience-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
