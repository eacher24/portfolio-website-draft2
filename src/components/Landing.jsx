import React from 'react'
import landingpic  from './assets/landing-img.png'
import { ReactComponent as Location } from './assets/boxicons-svg/svg/bx-location-plus.svg';


const Landing = () => {
  return (
    <div className="landing">
      <div className="contents">
        <div className="main">
          <div className="left-cont">
            <div className="title">
              <h1>Hi I'm Elise</h1>
              <div>
                <Location /> hi
              </div>

            </div>



          </div>
          <div className="right-cont">
            <img src={landingpic} class="landing-pic" alt="Quote up" />
          </div>
        </div>

      <div className="chevron"> hello</div>

      </div>





    </div>

  )
}

export default Landing
