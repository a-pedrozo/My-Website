import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React and Vite, showcasing my skills and projects with a modern dark theme.",
      status: "In Progress",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      github: "https://github.com/a-pedrozo/Website",
      live: "#"
    },
    {
      id: 2,
      title: "AI Chatbot",
      description: "A chatbot built with React and Node.js that uses the OpenAI API to generate responses to user questions.",
      status: "In Progress",
      technologies: ["React", "Node.js", "OpenAI API"],
      github: "https://github.com/a-pedrozo/AI-Chatbot",
      live: "#"
    },
    {
      id: 3,
      title: "Work Title 3",
      description: "This is a placeholder for a future project",
      status: "Pending",
      technologies: [],
      github: "https://github.com/a-pedrozo/task-manager",
      live: "#"
    },
    {
      id: 4,
      title: "Work Title 4",
      description: "This is a placeholder for a future project",
      status: "Pending",
      technologies: [],
      github: "https://github.com/a-pedrozo/weather-dashboard",
      live: "#"
    },
    {
      id: 5,
      title: "Work Title 5",
      description: "This is a placeholder for a future project",
      status: "Pending",
      technologies: [],
      github: "https://github.com/a-pedrozo/ml-deployment",
      live: "#"
    },
    {
      id: 6,
      title: "Work Title 6",
      description: "This is a placeholder for a future project",
      status: "Pending",
      technologies: [],
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
            <h1 className="projects-title">My Projects</h1>
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
