import React from 'react';
import {
    FaSearch, 
    FaUserAlt, 
    FaShoppingBasket, 
    FaHeart, 
    FaTruck
} from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import logo from "../images/quickfit.png";

const Topbar = ({children}) => {
    const menuItem=[
        {
            path:"/search",
            name:"",
            icon:<FaSearch/>
        },
        {
            path:"/wishlist",
            name:"",
            icon:<FaHeart/>
        },
        {
            path:"/cart",
            name:"",
            icon:<FaShoppingBasket/>
        },
        {
            path:"/login",
            name:"",
            icon:<FaUserAlt/>
        },
        {
            path:"/merchantlogin",
            name:"",
            icon:<FaTruck/>
        }
    ]
    return (
    <div>
        <div className='topbar-container'>
            <Link to="/">
                <img className='logo-link' src={logo} alt="logo" />
            </Link>
            <div className='topbar-right'>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="topbar-link" activeclassName="topbar-active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
        <main>{children}</main>
    </div>
    );
};

export default Topbar;