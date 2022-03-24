import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {PanelStyles, PanelTitle, PanelBody} from './styles'

import {auth} from 'libs/firebase'

import { onAuthStateChanged } from 'firebase/auth';

function UpdateProductsPanel({title, ...props}) {

    const [isUser, setIsUser ] = useState(false);
    const nav = useNavigate()

    onAuthStateChanged(auth, (user) => {
        if (user ) {
            setIsUser(true)
        } else {
            setIsUser(false);
            nav("/");
        }
    });
    if(isUser) {
        return (
            <PanelStyles>
                <PanelTitle>
                    <h2>{title || "Display Panel" }</h2>
                </PanelTitle>
                <PanelBody>

                </PanelBody>
            </PanelStyles>
        )


    }

    return null;
}

export default UpdateProductsPanel;