import React from "react";
import './Projects.css'
import Project__img1 from '../../img/Project/1.png'
import Project__img2 from '../../img/Project/2.png'
import Project__img3 from '../../img/Project/3.png'
import Project__img4 from '../../img/Project/4.jpg'
import Project__img5 from '../../img/Project/5.png'
import Project__img6 from '../../img/Project/6.jpg'
import Project__img7 from '../../img/Project/7.jpeg'
import Project__img8 from '../../img/Project/8.png'
import Project__img9 from '../../img/Project/9.png'
import Project__img10 from '../../img/Project/10.jpg'
import Project__img12 from '../../img/Project/12.png'
import Project__img13 from '../../img/Project/13.png'
function Projects() {
  return (
      
    <div className="projects component__space" id="Projects">
        <div className="heading">
            <h1 className="heading">My Projects</h1>
            <p className="heading p__color">These are my projects bellow</p>
        </div>
        <div className="container">
        <div className="row">
          <div className="col__2">
            <div className="project__box pointer">
            <div className="skill__meta">
                  <h1 className="project__text">Portfolio Website</h1>
                  <p className="p project__text p__color">https://github.com/SohamDasBiswas/Portfolio-Website</p>
                  <p className="p project__text p__color">ReactJs,HTML, CSS application</p>
                  <p className="p project__text p__color">Date:- April 10, 2022</p>
                  <div className="project__button d__flex align__items__center">
                  <a href="https://github.com/SohamDasBiswas/Portfolio-Website"><button className="project btn pointer">Go To The Page</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__2">
            <div className="project__box2 pointer">
            <img src={Project__img13} className='proj__img' alt='' height='130px' width='250px'></img>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Hand Gesture Car</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/Fire-IOT-Car</p>
                    <p className="p project__text p__color">Platform IO (C++)(NodeMCU)application</p>
                    <p className="p project__text p__color">Date:- Dec 18, 2021</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/Fire-IOT-Car"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img12} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Hand Gesture Car Hand</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/Hand-Gesture-Car-Hand-only-</p>
                    <p className="p project__text p__color">Platform IO (C++)(Arduino)application</p>
                    <p className="p project__text p__color">Date:- March 2, 2022</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/Hand-Gesture-Car-Hand-only-"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img12} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Fire Iot Car</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/Fire-IOT-Car</p>
                    <p className="p project__text p__color">Platform IO (C++)(NodeMCU)application</p>
                    <p className="p project__text p__color">Date:- Dec 18, 2021</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/Fire-IOT-Car"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img10} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Fire Iot Car Mobile App</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/Fire-IoT-Car-Application</p>
                    <p className="p project__text p__color">Java Android Studio application</p>
                    <p className="p project__text p__color">Date:- Dec 18, 2021</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/Fire-IoT-Car-Application"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img9} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">3x3x3 LED Cube</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/3x3x3-led-cube</p>
                    <p className="p project__text p__color">C++(Arduino) application</p>
                    <p className="p project__text p__color">Date:- Sept 27, 2021</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/3x3x3-led-cube"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img8} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Buddy Telegram Bot</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/Buddy-telegram-bot</p>
                    <p className="p project__text p__color">Python Chat-Bot application</p>
                    <p className="p project__text p__color">Date:- Aug 15, 2021</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/Buddy-telegram-bot"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img7} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Buddy Discord Bot</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/Buddy-discord-bot</p>
                    <p className="p project__text p__color">Python Chat-Bot application</p>
                    <p className="p project__text p__color">Date:- Jul 25, 2021</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/Buddy-discord-bot"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img7} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Arsenal Discord Bot</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/Arsenal-discord-bot</p>
                    <p className="p project__text p__color">Python Music-Chat-Bot application</p>
                    <p className="p project__text p__color">Date:- Jul 22, 2021</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/Arsenal-discord-bot"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img6} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Music Player</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/SOHAM-MUSIC-PLAYER</p>
                    <p className="p project__text p__color">Python UI application</p>
                    <p className="p project__text p__color">Date:- Mar 24, 2021</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/SOHAM-MUSIC-PLAYER"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img5} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Minecraft Afk Bot</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/Minecraft-afk-Bot</p>
                    <p className="p project__text p__color">JavaScript application</p>
                    <p className="p project__text p__color">Date:- Mar 24, 2021</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/Minecraft-afk-Bot"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img4} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">PDF Audiobook</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/Soham-PDF-AUDIOBOOK </p>
                    <p className="p project__text p__color">Python UI application</p>
                    <p className="p project__text p__color">Date:- Jan 12, 2021</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/Soham-PDF-AUDIOBOOK"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img2} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Email AI Bot</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/SOHAM-EMAIL-AI-BOT</p>
                    <p className="p project__text p__color">Python application</p>
                    <p className="p project__text p__color">Date:- Dec 27, 2020</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/SOHAM-EMAIL-AI-BOT"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img3} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col__2">
              <div className="project__box pointer">
              <div className="skill__meta">
                    <h1 className="project__text">Text Editor</h1>
                    <p className="p project__text project_link p__color">https://github.com/SohamDasBiswas/SOHAM-TEXT-EDITOR </p>
                    <p className="p project__text p__color">Python UI application</p>
                    <p className="p project__text p__color">Date:- Oct 7, 2020</p>
                    <div className="project__button d__flex align__items__center">
                    <a href="https://github.com/SohamDasBiswas/SOHAM-TEXT-EDITOR"><button className="project btn pointer">Go To The Page</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col__2">
              <div className="project__box2 pointer">
              <img src={Project__img1} className='proj__img' alt='' height='130px' width='250px'></img>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )};


export default Projects;
