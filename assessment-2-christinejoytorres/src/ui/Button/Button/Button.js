import React from "react";
import styles from './button.module.css'

function Button ({text, ...props}) {

    return (
        <button {...props}>
            {text}
        </button>
    );
}

export default Button

