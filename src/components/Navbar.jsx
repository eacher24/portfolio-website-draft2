import React from 'react'
import quoteup from './assets/quoteup.png';

const Navbar = () => {
  return (
    // <nav class="navbar fixed-top bg-body-tertiary">
    //    <div class="container-fluid">
    //       <a class="navbar-brand" href="#">Fixed top</a>


    //   </div>
    // </nav>

    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white custom-navbar">
      <a class="navbar-brand gradient-text" href="#">Elise Acher</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar
