import React from 'react'
import "./styles.css";
const timelineData = [
  {
    date: "High School 2021",
    title: "Scientific Stream",
    description: "Graduated with honors in scientific subjects.",
  },
  {
    date: "Internship 2024",
    title: "Front-End Developer - XYZ Company",
    description: "Worked on responsive web interfaces using React and Tailwind.",
  },
  {
    date: "Graduation 2025",
    title: "B.Sc. in Computer Science",
    description: "Completed degree with focus on software engineering and AI.",
  },
];

const Education = () => {
  return <section className="section timeline-section" id="education">
    <h2 className="timeline-title">Education & Experience</h2>
    <div className="timeline-container">
      {timelineData.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="timeline-date">{item.date}</span>
            <h4 className="timeline-heading">{item.title}</h4>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
}

export default Education