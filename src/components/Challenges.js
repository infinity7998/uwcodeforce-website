import React from 'react';

const Challenges = () => {
    return (
        <div className="container-fluid fullscreen pt-4 bg-dark text-warning">
            <div className="text-center pb-4 col-sm-6 col-centered intro">
                <h2 className="pb-4">Code Force : Challenges</h2>
                <p>Code Force challenges are real-world programming challenges designed for teams of 3-5 people. Challenges will take anywhere from 1-3 weeks to complete.</p>
                <p>Challenges will test knowledge in many skill areas, such as programming skills, communication and collaboration skills, and much more.</p>
                <p>Projects will be completed using Git version control.</p>
            </div>

            <div className="col-sm-8 col-centered border border-light p-2 intro">
                <div className="list-group text-center">
                    <button type="button" className="list-group-item list-group-item-action disabled">Challenge #1 - Holiday Havoc - Starting December 28, 2020</button>
                </div>
            </div>
        </div>
    )
}

export default Challenges