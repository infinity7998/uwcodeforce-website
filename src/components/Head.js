import React, { memo } from 'react';
import { Link } from 'react-router-dom';


const Head = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-secondary bg-gradient">
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

        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link" to="/"> Home</Link>
            <Link className="nav-link" to="/challenges">Challenges</Link>
            <Link className="nav-link" to="/contact"> Contact </Link>
            <a
              className="nav-link" href="https://forms.gle/aL1wt4wSevjWyE969"
              target="_blank" rel="noreferrer"
            >Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default memo(Head);