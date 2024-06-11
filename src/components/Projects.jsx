import React from 'react'
import puurse from './assets/images/puurse.png'
import airdoc from './assets/images/airdoc.png'


const Projects = () => {
  return (
    // <div className='projects'>Projects</div>
    <div className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <p>(Some of my proudest projects to date... and more to come)</p>
      </div>
      <div className="projects-container">


      <div class="card-deck">
  <div class="card">
    <img src={puurse} className="puurse" alt="Quote up" />
    <div class="card-body">
      <h5 class="card-title">Puurse</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={airdoc} className="puurse" alt="Quote up" />
    <div class="card-body">
      <h5 class="card-title">AirDoc</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    {/* <img src="..." class="card-img-top" alt="..."> */}
    <div class="card-body">
      <h5 class="card-title">Z-Boson-Minimization</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>



      </div>






    </div>
  )
}

export default Projects
