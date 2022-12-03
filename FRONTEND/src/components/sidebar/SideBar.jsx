import "./sidebar.css";
import ImagesJan from "../../img/new.jpg"
import React, { useState,useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import AboutPage from "../../pages/About";

export default function Sidebar(){
    const [ cats,setCats ] = useState([])
    useEffect(() => {
      const fetchCats = async()=>{
        const res = await axios.get(`http://localhost:4000/category`)
        setCats(res.data)
        // console.log(res)
      }
      fetchCats()
    },[])
    
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <AboutPage/>
                {/* <img src={ImagesJan} alt="" /> */}
                {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F343892121543679690%2F&psig=AOvVaw1O-w617TFObiazCZQRRNns&ust=1668877481828000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMC5t8ObuPsCFQAAAAAdAAAAABAS" alt="loading..." /> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, error consequatur? Non expedita sunt facilis possimus dolore eos magni, eveniet repellat eaque! Nemo libero veniam rerum nostrum, consequatur accusamus quae?</p> */}
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATAGORIES</span>
            <ul className="sidebarList">
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`}>
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter -square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
        </div>
    )
}