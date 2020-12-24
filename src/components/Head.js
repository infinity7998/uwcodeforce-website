import React from 'react';

class Head extends React.Component {

    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-secondary bg-gradient">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-link" href="/">Home</a>
                    <a className="nav-link" href="/challenges">Challenges</a>
                    <a className="nav-link" href="/contact">Contact</a>
                    <a className="nav-link" href="https://forms.gle/aL1wt4wSevjWyE969" target="_blank">Sign Up</a>
                  </div>
                </div>
              </div>
            </nav>
        )
    }
}

export default Head;