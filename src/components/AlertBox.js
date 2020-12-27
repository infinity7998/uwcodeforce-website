import React from 'react';


const AlertBox = ({message, type}) =>{
    return (
        <div className={`alert alert-${type}`} role="alert">{message}</div>
    )
}

export default AlertBox