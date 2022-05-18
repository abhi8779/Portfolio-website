import React from "react";

import ME2 from "../../assets/Picsart_22-05-18_12-16-57-230.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="me2"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small> 3+ Clients </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            lorem jksv fsvs sfd svsd vd hrhfbf brtr lorem jksv fsvs sfd svsd vd
            hrhfbf brtr lorem jksv fsvs sfd svsd vd hrhfbf brtr v lorem jksv
            fsvs sfd svsd vd hrhfbf brtr
          </p>
          <a href="#contact" className="btn-primary"></a>
        </div>
      </div>
    </section>
  );
};

export default About;
