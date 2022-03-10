import React from "react";

import {ButtonStyles} from './styles'

function Button ({text, ...props}) {

    return (
        <ButtonStyles {...props}>
            {text}
        </ButtonStyles>
    );
}

export default Button

