import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React and Vite, showcasing my skills and projects with a modern dark theme.",
      status: "Complete",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      github: "https://github.com/a-pedrozo/portfolio",
      live: "#"
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description: "Full-stack e-commerce platform with user authentication, product management, and payment integration using C#/.NET and React.",
      status: "In Progress",
      technologies: ["C#", ".NET", "React", "SQL Server", "Stripe API"],
      github: "https://github.com/a-pedrozo/ecommerce-app",
      live: "#"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      status: "In Progress",
      technologies: ["Node.js", "Express", "React", "Socket.io", "MongoDB"],
      github: "https://github.com/a-pedrozo/task-manager",
      live: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and mobile-responsive design.",
      status: "Complete",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API", "Chart.js"],
      github: "https://github.com/a-pedrozo/weather-dashboard",
      live: "#"
    },
    {
      id: 5,
      title: "Machine Learning Model Deployment",
      description: "End-to-end machine learning pipeline with model training, API deployment, and web interface for predictions.",
      status: "In Progress",
      technologies: ["Python", "Flask", "Scikit-learn", "Docker", "AWS"],
      github: "https://github.com/a-pedrozo/ml-deployment",
      live: "#"
    },
    {
      id: 6,
      title: "Database Management Tool",
      description: "Web-based database administration tool with query builder, data visualization, and user management features.",
      status: "Complete",
      technologies: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap"],
      github: "https://github.com/a-pedrozo/db-manager",
      live: "#"
    }
  ];

  const getStatusClass = (status) => {
    return status === "Complete" ? "status-complete" : "status-progress";
  };

  return (
    <div className="app-container">
      <div className="main-content">
        {/* Header Section */}
        <div className="projects-header">
          <div className="header-content">
            <h1 className="projects-title">#projects</h1>
            <Link to="/" className="view-all-link">← Back to Home</Link>
          </div>
          <div className="header-line"></div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-status">
                  <span className={`status-badge ${getStatusClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="project-footer">
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link github-link"
                  >
                    GitHub
                  </a>
                  {project.status === "Complete" && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link live-link"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
