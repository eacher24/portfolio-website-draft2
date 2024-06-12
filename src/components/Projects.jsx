import React from 'react'

import puurse from './assets/images/puurse.png'
import airdoc from './assets/images/airdoc.png'
import boson from './assets/images/z-boson.png'
import condensify from './assets/images/condensify.png'
import { ReactComponent as Rails } from './assets/boxicons-svg/svg/icons8-ruby-on-rails .svg';




const Projects = () => {






  return (
    // <div className='projects'>Projects</div>
    <div className="projects">
      <div className="projects-title">
        <h1>Projects </h1>
        <p>(Some of my proudest projects to date... and more to come 🚀)</p>
      </div>
    <div className="projects-container">


      <div class="card-deck">

        <div class="card">
          <img src={puurse} className="puurse" alt="Quote up" />
          <div class="card-body">
            <h5 class="card-title">Puurse</h5>
            <p class="card-text"> Unifies spending information across all cards in one location, allowing you to track your finances, set and update budgets on spending categories.</p>
            <div className="stack">
              <Rails width={50} height={50}/>
              <Rails width={50} height={50}/>
              <Rails width={50} height={50}/>

            </div>
            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}

            <div className="project-buttons">
              <a class ="prjt-button" href="https://www.puurse.pro/">Live &#8599; </a>
              <a class ="prjt-button" href="https://github.com/eacher24/puurse">Github &#8599; </a>
            </div>
          </div>
        </div>

        <div class="card">
          <img src={airdoc} className="puurse" alt="Quote up" />
          <div class="card-body">
            <h5 class="card-title">AirDoc</h5>
            <p class="card-text">A web application based on rails MVC architecture that pairs patients with private doctors in their area based on requirements such as specilaity, experience, language, rate.</p>
            <div className="stack">
              <Rails width={50} height={50}/>
              <Rails width={50} height={50}/>
              <Rails width={50} height={50}/>

            </div>


            <div className="project-buttons">
              <a class ="prjt-button" href="https://github.com/eacher24/airdoc">Github &#8599; </a>
            </div>
          </div>
        </div>

        <div class="card">
          <img src={condensify} className="puurse" alt="Quote up" />
          <div class="card-body">
            <h5 class="card-title">Condensify</h5>
            <p class="card-text">Data analytics of Z-boson (lHCb CERN experiment) interaction given energy (GeV), cross section (nb) and uncertainty on the measurement.</p>
            <div className="stack">
              <Rails width={50} height={50}/>
              <Rails width={50} height={50}/>
              <Rails width={50} height={50}/>

            </div>


            <div className="project-buttons">
              <a class ="prjt-button" href="https://github.com/eacher24/Z-Boson-Minimization">Github &#8599; </a>
            </div>
          </div>
        </div>

        <div class="card">
          <img src={boson} className="puurse" alt="Quote up" />
          <div class="card-body">
            <h5 class="card-title">Z-Boson-Minimization</h5>
            <p class="card-text">This python script wrtitten to reads input live data from lHCb CERN experiment, performs different rounds of validations and chi-squared .</p>
            <div className="stack">
              <Rails width={50} height={50}/>
              <Rails width={50} height={50}/>
              <Rails width={50} height={50}/>

            </div>
            <div className="project-buttons">
              <a class ="prjt-button" href="https://github.com/eacher24/Z-Boson-Minimization">Github &#8599; </a>
            </div>

          </div>
        </div>










      </div>
    </div>






    </div>
  )
}


export default Projects
