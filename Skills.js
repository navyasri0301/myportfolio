import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
const skills = [
  { name: 'HTML', level: '90%', icon: <FaHtml5 /> },
  { name: 'CSS', level: '85%', icon: <FaCss3Alt /> },
  { name: 'JavaScript', level: '80%', icon: <FaJs /> },
  { name: 'React', level: '85%', icon: <FaReact /> }
];

const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <div className="skills-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          {skill.icon}
          <h3>{skill.name}</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: skill.level }}></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
