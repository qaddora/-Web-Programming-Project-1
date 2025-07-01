import React from 'react'
import "./styles.css";
import portfolio from "../../assets/project/portfolio.jpg";
import shop from "../../assets/project/shop.jpg";
import chat from "../../assets/project/chat.jpg";
import blog from "../../assets/project/blog.jpg";
import weather from "../../assets/project/weather.jpg";
import tasks from "../../assets/project/tasks.jpg";

const projectData = [
  {
    title: "Portfolio Website",
    image: portfolio,
    tech: "React, CSS, JavaScript",
    description: "My personal portfolio showcasing my projects and skills.",
  },
  {
    title: "E-commerce App",
    image: shop,
    tech: "React, Html, CSS",
    description: "A simple shop app with cart and payment system.",
  },
  {
    title: "Chat App",
    image: chat,
    tech: "Sql , PHP",
    description: "Real-time chat app with authentication.",
  },
  {
    title: "Blog Platform",
    image: blog,
    tech: "JS, Java, css",
    description: "Blogging site with markdown support.",
  },
  {
    title: "Weather App",
    image: weather,
    tech: "HTML, CSS, JavaScript",
    description: "Fetches live weather using OpenWeatherMap API.",
  },
  {
    title: "Task Tracker",
    image: tasks,
    tech: "React, Html, JSON",
    description: "To-do task manager with edit & delete functionality.",
  },
];

const Projects = () => {
  return <section className="projects-section section" id="projects">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {projectData.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-tech">{project.tech}</p>
          <p className="project-desc">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
}

export default Projects