import React from 'react';

export default class AlertBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: props.message,
            type: props.type
        }
    }

    render() {
        let classes = "alert alert-" + this.state.type;
        return (
            <div className={classes} role="alert">
                {this.state.message}
            </div>
        )
    }
}