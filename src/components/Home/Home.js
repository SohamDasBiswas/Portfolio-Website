import React, {useState} from "react";
import "./Home.css";
import logo from "../../img/logo.png";
import Typed from "typed.js";

function Home() {
  // Fixed Header
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  //   Toggle Menu
  const [show, setShow] = useState(false);

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Skills">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Hobbies">
                <li className="nav__items mx__15">Hobbies</li>
              </a>
              <a href="#Projects">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Contacts">
                <li className="nav__items mx__15">Contacts</li>
              </a>
            </ul>
          </div>
          {/* Toggle Menu */}
          <div className="toggle_menu">
            <svg onClick={() => setShow(!show)} 
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-grid-fill white pointer"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
          </div>
          {show ?(
                <div className="sideNavbar">
                    <ul className="sidebar d__flex">
                    
                        <li className="sideNavbar"><a href="#Home">Home</a></li>
                    
                    
                        <li className="sideNavbar"><a href="#About">About</a></li>
                    
                    
                        <li className="sideNavbar"><a href="#Skills">Skills</a></li>
                    
                    
                        <li className="sideNavbar"><a href="#Hobbies">Hobbies</a></li>
                    
                    
                        <li className="sideNavbar"><a href="#Projects">Projects</a></li>
                    
                    
                        <li className="sideNavbar"><a href="#Contacts">Contacts</a></li>
                    
                    </ul>
              
          </div>
          ) :null}
        </div>
        {/* HOME CONENT */}
        <div className="container">
          <div className="home__content">
            <div classname="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I'm Soham Das Biswas.</h2>
              <h3 className="home__text pz__10">
                I'm a <span className="auto__type"></span>
              </h3>
              <h4 className="home__text pz__10">Currently Study in College.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
var options = {
    strings: ['Python Devoloper.', 'JavaScript Devoloper', 'Web Devoloper.', 'Graphics Designer.', 'Video Editor.', 'Arduino Programmer.'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  };

  var typed = new Typed('.auto__type',options);
