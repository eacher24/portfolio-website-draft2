import React from 'react'
import puurse from './assets/images/puurse.png'
import airdoc from './assets/images/airdoc.png'
import boson from './assets/images/z-boson.png'


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
            <p class="card-text"> Unifies spending information across all cards in one location, allowing you to track your finances, set and update budgets on spending categories in an aggregated location .</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div class="card">
          <img src={airdoc} className="puurse" alt="Quote up" />
          <div class="card-body">
            <h5 class="card-title">AirDoc</h5>
            <p class="card-text">A web application based on rails MVC architecture that pairs patients with private doctors in their area based on requirements such as specilaity, experience, language, rate.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div class="card">
          <img src={boson} className="puurse" alt="Quote up" />
          <div class="card-body">
            <h5 class="card-title">Z-Boson-Minimization</h5>
            <p class="card-text">Data analytics of Z-boson (lHCb CERN experiment) interaction given energy (GeV), cross section (nb) and uncertainty on the measurement.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        {/* <div class="card">
          <img src={airdoc} className="puurse" alt="Quote up" />
          <div class="card-body">
            <h5 class="card-title">Longest Word Game</h5>
            <p class="card-text">This python script wrtitten to reads input live data from lHCb CERN experiment, performs different rounds of validations and chi-squared .</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div> */}



      </div>



      </div>






    </div>
  )
}

export default Projects
