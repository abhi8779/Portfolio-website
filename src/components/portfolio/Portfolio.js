import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

import "./portfolio.css";

const projectsData = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto CUrrency Dashboard and Financial Visualization",
    github: "https://github.com/abhi8779",
    demo: "https://forkify-recipe-app-abhi.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crypto CUrrency Dashboard and Financial Visualization",
    github: "https://github.com/abhi8779",
    demo: "https://forkify-recipe-app-abhi.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto CUrrency Dashboard and Financial Visualization",
    github: "https://github.com/abhi8779",
    demo: "https://forkify-recipe-app-abhi.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crypto CUrrency Dashboard and Financial Visualization",
    github: "https://github.com/abhi8779",
    demo: "https://forkify-recipe-app-abhi.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto CUrrency Dashboard and Financial Visualization",
    github: "https://github.com/abhi8779",
    demo: "https://forkify-recipe-app-abhi.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crypto CUrrency Dashboard and Financial Visualization",
    github: "https://github.com/abhi8779",
    demo: "https://forkify-recipe-app-abhi.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projectsData.map((project) => {
          return (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={project.image} alt={project.title}></img>
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio__item-CTA">
                <a href={project.github} className="btn" target="_blank">
                  github
                </a>
                <a
                  href={project.demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
