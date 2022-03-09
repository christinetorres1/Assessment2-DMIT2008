import React from 'react'
import {Link} from 'react-router-dom'

import { IoHomeSharp, IoBasketSharp, IoAlbumsSharp, IoMedalSharp, IoWalletOutline, IoThumbsUpOutline, IoOptionsOutline, IoReturnUpBackSharp, IoGiftSharp, IoBagCheckOutline, IoLogOutOutline, IoLogoBuffer } from "react-icons/io5";

import {SideBarStyles, SideBarItems, SideBarItem, LogOut} from './styles'

function SideBar (props) {
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
                    <Link to="/"><IoLogOutOutline/><span> Log Out</span></Link>
                
            </SideBarItems>
        </SideBarStyles>
    )
}

export default SideBar