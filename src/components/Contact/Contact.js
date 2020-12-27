import React, { useState } from 'react';
import AlertBox from './../AlertBox/AlertBox';


const CONTACT_URL = "https://uwcodeforce.ca:3004/contact";


const Contact = () => {

    // const [disableSubmit, setDisableSubmit] = useState("");
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      message: "",
      json: true  
    })
    const [alertObject, setAlertObject] = useState({
        showAlert: false,
        alertMsg: "",
        alertType: "success"
    })


    const handleChange = (e, name) => {
        setFormState({
            ...formState,
            [name]: e.target.value
        })
    }

    // const disableFormSubmit = () =>{
    //     setDisableSubmit("disabled")
    // }

    // const enableFormSubmit = () =>{
    //     setDisableSubmit("")
    // }
    
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
            setAlertObject({showAlert: true, alertMsg: "Your message was sent!", alertType: "success"});
        }else{
            setAlertObject({showAlert: true, alertMsg: "Message failed to send!", alertType: "danger"});
        }
        }catch(t){
            setAlertObject({showAlert: true, alertMsg: "Something weird happened. Message failed to send." + t.message, alertType: "danger"});
        }
    }

    return (
        <div className="container-fluid pt-4 fullscreen bg-dark">
            <div className="col-sm-6 col-centered text-center text-warning">
                { alertObject.showAlert ? <AlertBox message={alertObject.alertMsg} type={alertObject.alertType}/> : " "}
                <h2>Contact</h2>
            </div>
            <div className="col-sm-6 col-centered text-warning intro">
                <form id="contactForm" onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input required type="text" className="form-control" name="name" value={formState.name} onChange={(e) => {handleChange(e, "name")}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input required type="email" className="form-control" name="email" value={formState.email} onChange={(e) => {handleChange(e, "email")}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label" >Message</label>
                        <textarea required className="form-control" name="message" rows="3" value={formState.message} onChange={(e) => {handleChange(e, "message")}}/>
                    </div>
                    <button
                        // className={`btn btn-primary ${disableSubmit}`}
                        className={"btn btn-primary"}
                        type="submit"
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
