import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    // <nav class="navbar fixed-top bg-body-tertiary">
    //    <div class="container-fluid">
    //       <a class="navbar-brand" href="#">Fixed top</a>


    //   </div>
    // </nav>

    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white custom-navbar">
      <Link to="landing" spy={true} smooth={true} offset={-70} duration={500} className="navbar-brand gradient-text" >Elise Acher</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" >About</Link>
          </li>
          <li class="nav-item">
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} class="nav-link">Projects</Link>
          </li>
          <li class="nav-item">
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} class="nav-link">Contact</Link>

          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar
