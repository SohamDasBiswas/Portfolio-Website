import React from "react";
import "./Skills.css";
import python__img from "../../img/python.png";
import javascript__img from "../../img/Javascript.png";
import PlatformIo__img from "../../img/PlatformIO.png";
import Graphics__img from "../../img/Graphics.png";
import Video__img from "../../img/Video.png";
function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">My Awesome Skills</h1>
        <p className="heading p__color">These are my skills bellow</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="skill__box pointer">
              <div className="icon">
                <img src={python__img} className='icon__img a' alt=''></img>
              </div>
              <div className="skill__meta">
                  <h1 className="skill__text">Python Devolopement</h1>
                  <p className="p skill__text p__color">I can make </p>
                  <p className="p skill__text p__color">Python UI application</p>
                  <p className="p skill__text p__color">and chat-bots</p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="skill__box pointer">
              <div className="icon">
                <img src={javascript__img}  className='icon__img b' alt=''></img>
              </div>
              <div className="skill__meta">
                  <h1 className="skill__text">JavaScript Devolopement</h1>
                  <p className="p skill__text p__color">I can make </p>
                  <p className="p skill__text p__color">JavaScript UI application</p>
                  <p className="p skill__text p__color">and chat-bots</p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="skill__box pointer">
              <div className="icon">
                <img src={PlatformIo__img} className='icon__img c' alt='' width='54px' height='54px'></img>
              </div>
              <div className="skill__meta">
                  <h1 className="skill__text">Platform IO(C++)</h1>
                  <p className="p skill__text p__color">I can program</p>
                  <p className="p skill__text p__color">Arduino, Nodemcu</p>
                  <p className="p skill__text p__color">using Platform IO(C++)</p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="skill__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="skill__meta">
              <h1 className="skill__text">Web Devolopement</h1>
                  <p className="p skill__text p__color">I can make</p>
                  <p className="p skill__text p__color">website using HTML, CSS</p>
                  <p className="p skill__text p__color">JavaScript, Reactjs, Nodejs</p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="skill__box pointer">
              <div className="icon">
                <img src={Graphics__img} classname='icon__img d' alt='' width='54px' height='54px'></img>
              </div>
              <div className="skill__meta">
                  <h1 className="skill__text">Graphics Designing</h1>
                  <p className="p skill__text p__color">I can make</p>
                  <p className="p skill__text p__color">Posters, Logo using</p>
                  <p className="p skill__text p__color">Adobe Photoshop CC 2022</p>
                  <p className="p skill__text p__color">Adobe Illustrator CC 2022</p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="skill__box pointer">
              <div className="icon">
                <img src={Video__img} classname='icon__img e' alt='' width='54px' height='54px'></img>
              </div>
              <div className="skill__meta">
              <h1 className="skill__text">Video Editing</h1>
                  <p className="p skill__text p__color">I can edit</p>
                  <p className="p skill__text p__color">Videos using</p>
                  <p className="p skill__text p__color">Adobe After Effects CC 2021</p>
                  <p className="p skill__text p__color">Adobe Premier Pro CC 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
