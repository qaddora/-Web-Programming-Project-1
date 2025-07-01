import React, { useEffect, useState } from 'react'
import Grid from "../Grid"
import "./styles.css";
const skillData = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
];

const Skills = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return <div className='skills-section' id='skills'>
    <Grid
      left={
        <div className="skills-bars">
          {skillData.map((skill, idx) => (
            <div key={idx} className="progress-bar-container">
              <div className="progress-bar-wrapper">
                <div
                  className="progress-bar"
                  style={{
                    width: loaded ? `${skill.level}%` : "0%",
                    transition: "width 1.2s ease-out",
                  }}
                />
              </div>
              <span className="skill-label mt-8">{skill.name}</span>
            </div>
          ))}
        </div>
      }
      right={<div className="skills-info">
        <h2>My Skills</h2>
        <p>
          I specialize in front-end development using HTML, CSS, and JavaScript.
          I'm passionate about building interactive and accessible interfaces with React.
        </p>
        <a href="mailto:osamakadduora@gmail.com" className="contact-btn">
          Contact Me
        </a>
      </div>}
    />
  </div>
}

export default Skills