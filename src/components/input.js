import React from 'react';
import './input.css';

const Input = props => {
    return(
    <React.Fragment>
        <div className="input">{props.input}</div>
    </React.Fragment>
    )
}
export default Input; 