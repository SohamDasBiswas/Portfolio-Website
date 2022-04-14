import React, { useState } from "react";
import Typewriter from 'typewriter-effect';
import "./Home.css";
import logo from "../../img/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { AiFillCustomerService } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Home() {
  // Fixed Header
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className="home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>

        {/* HOME CONENT */}
        <div className="container">
          <div className="home__content">
            <div classname="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I'm Soham Das Biswas.</h2>
              {/* <h3 className="home__text pz__10">
                I'm a */}
                <span className="typing-box">
                <h3 className="home__text pz__10">
                 
                  <Typewriter 
                   options={{
                    skipAddStyles: true,
                    // wrapperClassName: "typing-box",
                    strings: ['Python Developer.', 'JavaScript Developer.', 'Web Developer.', 'Graphics Designer.', 'Video Editor.', 'Arduino Programmer.'],
                    autoStart: true,
                    cursor: null,
                    typeSpeed: 150,
                    backSpeed: 150,
                    loop: true
                  }}
                /></h3></span>
              {/* </h3> */}

              <h4 className="home__text pz__10">Currently Studying in College.</h4>
            </div>
          </div>
        </div>
      </div>
      {/* Nav Bar */}
      <nav className="nav__a">
        <a
          href="#"
          onClick={() => setActiveNav("#Home")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#About"
          onClick={() => setActiveNav("#About")}
          className={activeNav === "#About" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#Skills"
          onClick={() => setActiveNav("#Skills")}
          className={activeNav === "#About" ? "active" : ""}
        >
          <GiSkills />
        </a>
        <a
          href="#Hobbies"
          onClick={() => setActiveNav("#Hobbies")}
          className={activeNav === "#About" ? "active" : ""}
        >
          <AiFillCustomerService />
        </a>
        <a
          href="#Projects"
          onClick={() => setActiveNav("#Projects")}
          className={activeNav === "#About" ? "active" : ""}
        >
          <AiFillProject />
        </a>
        <a
          href="#Contacts"
          onClick={() => setActiveNav("#Contacts")}
          className={activeNav === "#About" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
      <nav className="nav__b">
        <a href="https://github.com/SohamDasBiswas">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/soham-das-biswas-b5460b1a9/">
          <ImLinkedin />
        </a>
        <a href="https://twitter.com/SOHAMDASBISWAS1">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/soham_das_biswas/">
          <BsInstagram />
        </a>
        <a href="https://www.youtube.com/channel/UCF07e0z2L-4AeGE41MTRlRw">
          <AiFillYoutube />
        </a>
        <a href="https://discord.io/communitySDB">
          <FaDiscord />
        </a>
      </nav>
    </div>
  );
}
export default Home;
