import React from 'react'
import './Hobbies.css'
function Hobbies() {
  return (
    <div className="hobbies component__space" id='Hobbies'>
      <div className="heading">
        <h1 className="heading">My Hobbies</h1>
        <p className="heading p__color">These are my Hobbies bellow</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="hobbies__box pointer">
              
              <div className="hobbies__meta">
                  <h1 className="hobbies__text">Coding</h1>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="hobbies__box pointer">
              
              <div className="hobbies__meta">
                  <h1 className="hobbies__text">Gaming</h1>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="hobbies__box pointer">
              
              <div className="hobbie__meta">
                  <h1 className="hobbies__text">Watching Movies</h1>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="hobbies__box pointer">
              
              <div className="hobbies__meta">
                  <h1 className="hobbies__text">Watching Web-Series</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Hobbies