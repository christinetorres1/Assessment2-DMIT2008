import React from 'react'

import { IoMailOutline, IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";

import {AppBarStyles, AppBarItem, AppBarItems, AppBarItemGroup} from './styles'

import { GiChocolateBar } from "react-icons/gi";

function AppBar (props) {
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem><GiChocolateBar/> Chocolate Store</AppBarItem>
                <AppBarItemGroup>
                    <span><IoMailOutline/></span>
                    <span><IoNotificationsOutline /></span>
                    <span><IoSettingsOutline /></span>
                    <span><img src="https://avatars.dicebear.com/api/avataaars/christine.svg?b=%238a8075&r=50&scale=111&top[]=longHair&mouth[]=tongue&skin[]=light" width="48px" alt="icon"/></span>
                    
                </AppBarItemGroup>

            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar