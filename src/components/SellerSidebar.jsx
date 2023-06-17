import React, { useState } from 'react';
import {
    FaHome,
    FaBox,
    FaFire,
    FaClipboardList,
    FaTags,
    FaStreetView,
    FaUserAlt,
    FaTruck,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import profilepic from "../images/profilepic.png";

const SellerSidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/sellercentre",
            name:"Home",
            icon:<FaHome/>
        },
        /*
        {
            path:"/sellerorder",
            name:"Order",
            icon:<FaClipboardList/>
        }, */
        {
            path:"/sellerproduct",
            name:"Product",
            icon:<FaBox/>
        },
        {
            path:"/sellermarketing",
            name:"Marketing Centre",
            icon:<FaTags/>
        }
    ]
    return (
        <div className='container'>
            <div className="profile-sidebar">
                <div className="top_section">
                    <div className="profilepic-container">
                        <img src={profilepic} className='profilepic' alt="logo" />
                        <p>Admin123</p>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default SellerSidebar;