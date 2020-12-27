import React, { memo } from 'react'


function Home(){
  return (
    <div className="container-fluid pt-4 fullscreen bg-dark">
      <div className="row text-warning intro">
        <div className="col-sm-8 col-centered text-center">
          <h2>UW Code Force</h2>
          <h4>Collaborate. Compete. Compile</h4>
        </div>
      </div>
      <div className="row text-warning intro2">
        <div className="col-sm-9 col-centered mt-4">
          <h2 className="text-warning">News</h2>
          <div className="row border border-secondary">
            <div className="col-sm-8">
              <h4 className="pb-3">First challenge starts Dec. 28, 2020</h4>
              <p>The first challenge will be starting on December 28th, 2020!</p>
              <p>If you are looking to participate, please make sure you <a href="https://forms.gle/aL1wt4wSevjWyE969" target="_blank" rel="noreferrer">sign up</a> before December 24th!</p>
              <small>posted December 22, 2020</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default memo(Home)