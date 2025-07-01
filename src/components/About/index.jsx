import React from 'react'
import Grid from "../Grid";
import resume from "../../assets/resume.pdf";
import avatar from "../../assets/avatar.jpg";

import "./styles.css";

const About = () => {
    return <div id="about">
        <Grid
            left={<div className="about-avatar center-items">
                <img src={avatar} alt="Personal Avatar" />
            </div>}
            right={
                <div className="about-text">
                    <h2 className='fz-32 mb-16'>About Me</h2>
                    <p className='fz-16 mb-24'>
                        I'm a passionate software engineering student with a strong interest
                        in web development, UI/UX design, and building beautiful digital
                        experiences. I enjoy learning new technologies and collaborating on
                        creative projects.
                    </p>
                    <a href={resume} download className="download-btn">
                        Download Resume
                    </a>
                </div>
            }
        />
    </div>

}

export default About