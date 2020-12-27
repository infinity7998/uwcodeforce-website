import React, { useState } from 'react';
import AlertBox from './../AlertBox/AlertBox';
import { CodeForceTitleSection } from './../Miscellaneous/Miscellaneous.component';



const CONTACT_URL = "https://uwcodeforce.ca:3004/contact";

// If teams want names, modify it here.
const TEAMS = Array.from({length: 7}, (v, i) => i+1);


const Contact = () => {

    const [formState, setFormState] = useState({
      name: "",
      email: "",
      message: "",
      team: "",
      json: true  
    })
    const [alertObject, setAlertObject] = useState({
        showAlert: false,
        alertMsg: `Sample message`,
        alertType: "success"
    })


    const handleChange = (e, name) => {
        setFormState({
            ...formState,
            [name]: e.target.value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            let res = await (await fetch(CONTACT_URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            })
            ).json()
        if(res.status === "success"){
            setAlertObject({showAlert: true, alertMsg: `Your message was sent on ${(new Date()).toLocaleString()}!`, alertType: "success"});
        }else{
            setAlertObject({showAlert: true, alertMsg: "Message failed to send!", alertType: "danger"});
        }
        }catch(t){
            setAlertObject({showAlert: true, alertMsg: "Something weird happened. Message failed to send." + t.message, alertType: "danger"});
        }
    }

    return (
        <div className="container-fluid pt-0 fullscreen intro">
            <CodeForceTitleSection />
            <div className="row">
                <div className="col-sm-9 col-centered text-center mt-4 mb-2">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className="row mb-4">
            { alertObject.showAlert ? <AlertBox message={alertObject.alertMsg} type={alertObject.alertType}/> : " "}
            </div>
            <div className="row mb-4">
                <div className="col-sm-6 col-centered">
                    <form
                        onSubmit={(e)=>{handleSubmit(e)}}
                        autoComplete="off"
                    >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                            <input required type="name" className="form-control" name="name" placeholder="John Doe" value={formState.name} onChange={(e) => {handleChange(e, "name")}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label"><strong>Email Address</strong></label>
                            <input required type="email" className="form-control" name="email" placeholder="The one that you used to sign up." value={formState.email} onChange={(e) => {handleChange(e, "email")}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="team" className="form-label"><strong>Team</strong></label> 
                            {TEAMS.map((elem, idx) => (
                                <div class="form-check">
                                    <input required class="form-check-input" type="radio" name="team" id={`form-team-${idx}`} value={elem}/>
                                    <label class="form-check-label" for={`form-team-${idx}`}>
                                        Team {elem}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label" ><strong>Message</strong></label>
                            <textarea required className="form-control" name="message" placeholder="Stuck somewhere? Got questions? How can we help? Describe here ..." rows="5" value={formState.message} onChange={(e) => {handleChange(e, "message")}}/>
                        </div>
                        <div className="mb-3">
                            <button
                                className={"btn btn-dark m-auto d-block"}
                                type="submit"
                            >Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
