import React from 'react'
// import {Link} from 'react-router-dom'

import { MdDashboard } from "react-icons/md";

import { signOut } from 'firebase/auth'
import { auth } from 'libs/firebase';


import {SideBarStyles, SideBarItems} from './styles'

import {Button} from './../../ui/button'
import ProductOptions from './ProductOptions';

function SideBar (props) {
    function onLogoutRequest (e) {
        signOut(auth)

        }

    return (

        
        <SideBarStyles>
            <SideBarItems>
                <MdDashboard size="25px"/>
                <h2>DashBoard</h2>
                    
                    
                
            </SideBarItems>

            <ProductOptions/>

            <Button onClick={onLogoutRequest} text="Log Out"/>

        </SideBarStyles>
    )
}

export default SideBar