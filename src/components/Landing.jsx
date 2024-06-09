import React from 'react'
import landingpic  from './assets/landing-img.png'
import { ReactComponent as Location } from './assets/boxicons-svg/svg/bxs-location-plus.svg';
import { ReactComponent as Langs } from './assets/boxicons-svg/svg/bxs-chat.svg'
import { ReactComponent as Remote } from './assets/boxicons-svg/svg/bx-world.svg';
import { ReactComponent as Relocate } from './assets/boxicons-svg/svg/bxs-plane-alt.svg';

const Landing = () => {
  return (
    <div className="landing container-fluid">
      <div className="contents">
        <div className="main">
          <div className="left-cont container">
            <div className="title">
              <h1>Hi, I'm Elise Acher</h1>
              <div className='icons'>
                <Location width={25} height={25}/><p>London, UK</p>
                <Langs width={25} height={25}/> <p>ENG, FR</p>
                <Remote width={25} height={25}/> <p>Global Remote</p>
                <Relocate width={25} height={25}/> <p>Relocate to Lisboa, PT</p>
              </div>
              <h3>
                full stack engineer
              </h3>
              <span>
                Recent Le Wagon web dev bootcamp graduate with <b>over 2
                years</b> of experience in full stack development. I am passionate about bringing the wildest ideas to life through the
                power of tech. No challenge is too big, so<b> let's get started!</b>
              </span>



              {/* <div className="buttons">
                <button>Resume</button>
                <button>Github</button>
              </div> */}

              <div className="ext-links">
                <a class ="button" href="https://github.com/eacher24">Github     &#8599; </a>
                <a class = "button" href="">Resume     &#8599; </a>
              </div>

            </div>



          </div>
          <div className="right-cont container ">
            <img src={landingpic} className="landing-pic" alt="Quote up" />
          </div>
        </div>

      {/* <div className="chevron"></div> */}

      </div>





    </div>

  )
}

export default Landing
