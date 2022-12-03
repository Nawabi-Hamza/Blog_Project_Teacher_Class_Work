import "./header.css";
// import ImagesJan from "../../img/new2.jpg"
import React from 'react'
const ImagesJan = "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React and node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={ImagesJan} alt="loading..." />
        </div>
    )
}