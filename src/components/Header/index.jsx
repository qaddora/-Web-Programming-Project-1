import React, { useEffect, useState } from "react";
import Grid from "../Grid";
import "./styles.css";
import avatar from "../../assets/avatar.jpg";

const name = "Osama Qaddora";
const jobTitles = ["Web Developer", "React Specialist", "Frontend Engineer", "UI/UX Enthusiast"];

const Header = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedJob, setDisplayedJob] = useState("");
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedName(name.slice(0, index + 1));
      index++;
      if (index === name.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (displayedName.length !== name.length) return;

    let charIndex = 0;
    let typingTimeout;
    let pauseTimeout;

    const typeTitle = () => {
      const currentJob = jobTitles[jobIndex];
      if (charIndex <= currentJob.length) {
        setDisplayedJob(currentJob.slice(0, charIndex));
        charIndex++;
        typingTimeout = setTimeout(typeTitle, 80);
      } else {
        // Pause before next job title
        pauseTimeout = setTimeout(() => {
          setDisplayedJob("");
          setJobIndex((prev) => (prev + 1) % jobTitles.length);
        }, 1500);
      }
    };

    typeTitle();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [displayedName, jobIndex]);

  return (
    <div className="header">
      <Grid
        left={
          <div className="center-items" style={{ height: "100%" }}>
            <div>
              <h1 className="fz-48 color-white">{displayedName}</h1>
              <h2 className="fz-28 color-white blinking-cursor">{displayedJob}</h2>
            </div>
          </div>
        }
        right={
          <div className="center-items">
            <img
              src={avatar}
              alt="Student Avatar"
              className="avatar"
            />
          </div>
        }
      />
    </div>
  );
};

export default Header;
