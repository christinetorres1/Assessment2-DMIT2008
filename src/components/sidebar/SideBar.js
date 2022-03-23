import React from 'react'
// import {Link} from 'react-router-dom'

import { signOut } from 'firebase/auth'
import { auth } from 'libs/firebase';


import {SideBarStyles, SideBarItems, SideBarItem} from './styles'

import {Button} from './../../ui/button'
import ProductOptions from './ProductOptions';

function SideBar (props) {
    function onLogoutRequest (e) {
        signOut(auth)

        }

    return (

        
        <SideBarStyles>
            <SideBarItems>
                <h2>DashBoard</h2>
                    <ProductOptions/>
                    <Button onClick={onLogoutRequest} text="Log Out"/>
                
            </SideBarItems>
        </SideBarStyles>
    )
}

export default SideBar