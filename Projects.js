import React from 'react';

const projects = [
  { name: 'Project 1', description: 'A modern website', link: '#' },
  { name: 'Project 2', description: 'An e-commerce platform', link: '#' },
];

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-cards">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
