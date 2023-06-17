import React, { useState } from 'react';
import {
    FaHome,
    FaBars,
    FaFire,
    FaThumbsUp,
    FaTags,
    FaStreetView,
    FaUserAlt,
    FaTruck,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from "../images/quickfit.png";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/newarrivals",
            name:"New Arrivals",
            icon:<FaTags/>
        },
        {
            path:"/bestsellers",
            name:"Best Sellers",
            icon:<FaThumbsUp/>
        },
        {
            path:"/sale",
            name:"Sales",
            icon:<FaFire/>
        },
        {
            path:"/myavatar",
            name:"My Avatar",
            icon:<FaStreetView/>
        },
    ]
    return (
        <div className='container'>
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
                <div className="top_section">
                    {/*<div style={{display: isOpen ? "block" : "none"}} className="logo">
                        <img src={logo} alt="logo" />
                    </div>*/}
                    <div style={{marginLeft: isOpen ? "0px" : "0px"}}className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="sidebar-active">
                            <div style={{display: isOpen ? "block" : "none"}} className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;