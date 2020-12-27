import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function computeTimeToTarget(target){
    let date_now = new Date()
    
    let delta = (target - date_now) / 1000

    if(delta <= 0) { //If the date has already passed, unlock the challenge
        return {days: '0', hours: '0', minutes: '0', seconds: '0'};
    }

    let days = Math.floor(delta / 86400)
    delta -= days * 86400
    let hours = Math.floor(delta / 3600) % 24
    delta -= hours * 3600
    let minutes = Math.floor(delta / 60) % 60
    delta -= minutes * 60
    let seconds = Math.floor(delta % 60)

    return {days, hours, minutes, seconds}
}


const Challenge = ({title, releaseTime, desc, index, url}) => {

    const [timeTo, setTimeTo] = useState(undefined);
    let timer;

    useEffect(()=>{
        timer = setInterval(()=>{
            let remainingTime = computeTimeToTarget(releaseTime)
            if (isReady(remainingTime)){
                clearInterval(timer);
                setTimeTo({hours: '0', days: '0', minutes: '0', seconds: '0'})
            }else{
                setTimeTo(computeTimeToTarget(releaseTime))
            }            
        }, 1000);
    }, [])

    function isReady(t){
        return t && t.days === '0' && t.hours === '0' && t.minutes === '0' && t.seconds === '0'
    }

    return (
        <Card className="m-auto p-0 mt-2 border border-rounded">
            <Card.Header as="h6" className="d-flex justify-content-between">
                <span>
                    Challenge #{index}
                </span>
                <div className="d-none d-md-block" style={{width: "600px"}}></div>
                {timeTo && !isReady(timeTo) && (
                    <span>
                        &nbsp; &nbsp; Ready in: {`${timeTo.days.toString().padStart(2, '0')}d ${timeTo.hours.toString().padStart(2, '0')}h ${timeTo.minutes.toString().padStart(2, '0')}m ${timeTo.seconds.toString().padStart(2, '0')}s`}
                    </span> 
                )}
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                {desc}
                </Card.Text>
                {isReady(timeTo) && (
                   <Link to={`challenges/${url}`}>
                       <Button variant="dark"> View Challenge </Button>
                   </Link>
                )}
                {!isReady(timeTo) && (
                    <Button variant="dark" disabled> View Challenge </Button> 
                )}
            </Card.Body>
        </Card>
    )
}

export {
    Challenge
}