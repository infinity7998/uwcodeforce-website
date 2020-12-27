import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './../Miscellaneous/Miscellaneous.component';


const Head = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Logo />
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav p-2">
            <Link className="nav-link text-light" to="/"> Home</Link>
            <Link className="nav-link text-light" to="/challenges">Challenges</Link>
            <Link className="nav-link text-light" to="/contact"> Contact </Link>
            <a
              className="nav-link text-light"
              href="https://forms.gle/aL1wt4wSevjWyE969"
              target="_blank"
              rel="noreferrer"
            >Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default memo(Head);