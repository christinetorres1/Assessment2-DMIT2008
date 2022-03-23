import React from 'react'
// import {Link} from 'react-router-dom'

import { signOut } from 'firebase/auth'
import { auth } from 'libs/firebase';

import { IoHomeSharp, IoBasketSharp, IoAlbumsSharp, IoMedalSharp, IoWalletOutline, IoThumbsUpOutline, IoOptionsOutline, IoReturnUpBackSharp, IoGiftSharp, IoBagCheckOutline, IoLogOutOutline, IoLogoBuffer } from "react-icons/io5";

import {SideBarStyles, SideBarItems, SideBarItem} from './styles'

import {Button} from './../../ui/button'

function SideBar (props) {
    function onLogoutRequest (e) {
        signOut(auth)

        }

    return (

        
        <SideBarStyles>
            <SideBarItems>
               
                    <SideBarItem><IoHomeSharp/><span>Home</span></SideBarItem>
                    <SideBarItem><IoAlbumsSharp/><span>Products</span></SideBarItem>
                    <SideBarItem><IoBasketSharp/><span>Buy</span></SideBarItem>
                    <SideBarItem><IoWalletOutline/><span>Orders</span></SideBarItem>
                    <SideBarItem><IoThumbsUpOutline/><span>Reviews</span></SideBarItem>
                    <SideBarItem><IoMedalSharp/><span>Brands</span></SideBarItem>
                    <SideBarItem><IoOptionsOutline/><span>Categories</span></SideBarItem>
                    <SideBarItem><IoReturnUpBackSharp/><span>Returns</span></SideBarItem>
                    <SideBarItem><IoGiftSharp/><span>Gifts</span></SideBarItem>
                    <SideBarItem><IoBagCheckOutline/><span>Sales</span></SideBarItem>
                    <SideBarItem><IoLogoBuffer/><span>Custom</span></SideBarItem>
                    <Button onClick={onLogoutRequest} text="Log Out"/>
                
            </SideBarItems>
        </SideBarStyles>
    )
}

export default SideBar