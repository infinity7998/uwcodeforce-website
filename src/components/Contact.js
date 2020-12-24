import React from 'react';
import axios from 'axios';

import AlertBox from './AlertBox';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: "",
                email: "",
                message: "",
                json: true
            },
            submitEnabled: true,
            showAlert: false,
            alertMsg: "",
            alertType: "success"
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "https://uwcodeforce.ca:3004/contact",
            data: this.state.form
        }).then((response) => {
            if(response.data.status === "success") {
                this.setState({showAlert: true, alertMsg: "Your message was sent!", alertType: "success"});
            } else {
                this.setState({showAlert: true, alertMsg: "Message failed to send!", alertType: "danger"});
            }
        }).catch((err) => {
            alert("There was an error: " + err);
        });
    }

    onNameChange(e) {
        let form = this.state.form;
        form.name = e.target.value;
        this.setState({form: form});
    }

    onEmailChange(e) {
        let form = this.state.form;
        form.email = e.target.value;
        this.setState({form: form});
    }

    onMessageChange(e) {
        let form = this.state.form;
        form.message = e.target.value;
        this.setState({form: form});
    }

    disableForm() {
        this.setState({submitEnabled: false});
    }

    render() {

        let btnClasses = "btn btn-primary " + (this.state.submitEnabled ? "" : "disabled");
        return (
            <div className="container-fluid pt-4 fullscreen bg-dark">
                
                <div className="col-sm-6 col-centered text-center text-warning">
                    { this.state.showAlert ? <AlertBox message={this.state.alertMsg} type={this.state.alertType}/> : null }
                    <h2>Contact</h2>
                </div>

                <div className="col-sm-6 col-centered text-warning intro">
                    <form id="contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={this.state.form.name} onChange={this.onNameChange.bind(this)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" name="email" value={this.state.form.email} onChange={this.onEmailChange.bind(this)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" name="message" rows="3" value={this.state.form.message} onChange={this.onMessageChange.bind(this)}/>
                        </div>

                        <button className={btnClasses} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;