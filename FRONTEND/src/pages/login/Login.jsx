import "./login.css"
import { Link } from "react-router-dom"
import React from 'react'
import { useRef } from "react"
import axios from "axios"
import { useContext } from "react"
import { Context } from "../../Context/Context"



export default function Iogin(){
    const { user,dispatch } = useContext(Context)

    const userRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        // alert("welocme login")
            dispatch({type: "LOGIN_START"})

        try{
            const res = await axios.post("http://localhost:4000/auth/login",{
                username:userRef.current.value,
                password:passwordRef.current.value,
            })
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:res.data
                     }) 
                    window.location.replace("/")


        }catch(error){
            dispatch({type:"LOGIN_FAILER"})
        }
        console.log(user);
    }
    return(
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit} > 
                <label>UserName:</label>
                <input type="text" ref={userRef}
                 className="loginInput" placeholder="Enter Your User_Name..."/>
                <label>Password:</label>
                <input type="text" ref={passwordRef}
                 className="loginInput" placeholder="Enter Your Password..."/>
                <button className="loginButton" type="submit">Login</button>
            </form>
            <button className="loginRegister">
                <Link className='link' to="/register">Register</Link>
            </button>
        </div>
    )
}