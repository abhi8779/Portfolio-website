import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a herf="http://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a herf="https://github.com/abhi8779" target="_blank">
        <BsGithub />
      </a>
      <a herf="http://instagram.com" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
