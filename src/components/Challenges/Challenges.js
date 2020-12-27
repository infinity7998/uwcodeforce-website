import React, { useState } from 'react'
import { CodeForceTitleSection } from './../Miscellaneous/Miscellaneous.component'
import { Challenge } from './Challenge.component'


const Challenges = () => {

    // Maybe get challenges from server. But that is for later.
    // TODO: get challenge data from server.

    const [challenges, setChallenges] = useState([
        {
            releaseTime: new Date("12/28/2020"),
            title: "Holiday Havoc",
            desc: "Some sample description goes here...",
            url: "Challenge1.pdf"
        },
        {
            releaseTime: new Date("12/30/2020"),
            title: "Challenge 2",
            desc: "Some sample description goes here...",
            url: "holidayhavoc"
        },
        {
            releaseTime: new Date("01/18/2021"),
            title: "Challenge 3",
            desc: "Some sample description goes here...",
            url: "holidayhavoc"
        }
    ])


    return (
        <div className="container-fluid fullscreen intro">
            <CodeForceTitleSection/>
            <div className="row">
                <div className="col-sm-9 text-center m-auto mt-4">
                    <h1>Challenges</h1>
                </div>
            </div>
            <div className="col-sm-9 m-auto p-3 mt-3">
                <h2>In a nutshell, they ...</h2>
                <br/>
                    <ul className="p-3 col-sm-9">
                        <li>are <strong>real-world programming challenges</strong> designed for teams of 3-5 people.</li>
                        <li>are about <strong>1-3 weeks</strong> long.</li>
                        <li><strong>test</strong> and <strong>strengthen your knowledge</strong> in many areas, such as <strong>design (both visual and system)</strong>, <strong>development (full-stack)</strong>, <strong>databases</strong>, <strong>cloud platforms</strong>, <strong>devops</strong>, and plenty more. </li>
                        <li>help you develop soft skills like <strong> communication</strong>, <strong> team work</strong>, <strong> persistence </strong> to solve full-scale problems, etc.</li>
                        <li>are intended for the participants to <strong>get familiar with</strong> and <strong>excited</strong> about the <strong>technologies</strong> trending in the <strong>software industry</strong>.</li>
                    </ul>
            </div>
            <div className="col-sm-9 m-auto p-3 mt-3">
                <h2>All Challenges</h2>
                <br/>
                <h6>(These challenges will automatically be made available on the designated date.)</h6>
            </div>
            <div className="row col-sm-10 mx-auto">
            {[...challenges].sort((a, b) => a.releaseTime > b.releaseTime ? 1 : -1).map((item, idx) => (
                <Challenge
                    releaseTime={item.releaseTime}
                    title={item.title}
                    desc={item.desc}
                    index={idx + 1}
                    key={item.title}
                    className="mb-5 mt-5"
                    url={item.url}
                />
            ))}
            </div>
        </div>
    )
}

export default Challenges