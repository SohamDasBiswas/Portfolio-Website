import React from "react";
import "./About.css";
import aboutImg from "../../img/about.png";
function About() {
  //Up To Top Btn
  window.addEventListener("scroll", function(){
    const upToTop = this.document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  return (
    <div className="about component__space" id="About">
      <div classname="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img"></img>
          </div>
          <div className="col__2 about__all">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hello, I'm Soham Das Biswas, I am currently a 2nd Year B.Tech
                student of Kalyani Government Engineering College, Nadia in
                Computer Science and Engineering Branch. And also member of
                Robotics Society and Google Devoloper Student Club of our
                College.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/19dQyr9X_ZVpWzOS53Lfkn9NKDJkhXDB7/view?usp=sharing">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#Contacts">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
