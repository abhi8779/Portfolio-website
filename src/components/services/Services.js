import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
          </ul>
        </article>
        {/* End Of Web Dev */}
        <article className="service">
          <div className="service__head">
            <h3>Blog Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>lorem and us the usa ius the</p>
            </li>
          </ul>
        </article>
        {/* End Of Web Dev */}
      </div>
    </section>
  );
};

export default Services;
