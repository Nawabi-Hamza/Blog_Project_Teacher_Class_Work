import Sidebar from "../../components/sidebar/SideBar"
import "./setting.css"
import ImagesJan from "../../img/new.jpg"
import React from 'react'


export default function Setting(){
    return(
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update your account</span>
                    <span className="settingDeleteTitle">Delete account</span>

                </div>
                <form className="settingForm">
                <label>Profile Picture</label>
                    <div className="settingPP">
                    <img src={ImagesJan} alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingPPIcon far fa-user-circle"></i>
                
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="username"/>
                    
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="example@email.com"/>
                    
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Password"/>
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>

        </div>
    )
}