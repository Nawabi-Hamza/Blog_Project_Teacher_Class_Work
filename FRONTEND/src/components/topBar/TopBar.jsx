import React from "react";
import "./topbar.css";
import ImagesJan from "../../img/new.jpg"
import { Link } from "react-router-dom"

import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function TopBar() {
    const { user,dispatch } = useContext(Context)
  const handeleLogout = ()=>{
        // e.preventDefault()
        dispatch({type:"LOGOUT"}) 
        alert("You are Logout Successfuly")
        
    }
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter -square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="toplist">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about" className="link">ABOUT</Link>
                    </li>
                    {/* <li className="topListItem">
                        <Link to="/" className="link">CONTACT</Link>
                    </li> */}
                    <li className="topListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handeleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <>Welcome: {user.username} &nbsp;<img className="topImg" src={ImagesJan} alt="load..." /> &nbsp; </>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link to="/login" className="link">Login</Link>
                            </li>
                            <li className="topListItem">
                            <Link to="/register" className="link">Register</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}