import { Link } from "react-router-dom"
import "./register.css"
import React, { useState } from 'react'
import axios from "axios"


export default function Register(){
    const [ username,setUsername ] = useState('')
    const [ email,setEmail ] = useState('')
    const [ password,setPassword ] = useState('')
    const [ error,setError ] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setError(false)
        try{
            const res =await axios.post("http://localhost:4000/auth/register",{
                username,email,password
            });
            console.log("user Register successfuly")
            res.data && window.location.replace("/login")

        }catch(error){
            setError(true)
        }
    }
    return(
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
                <input type="text" onChange={(e)=> setUsername(e.target.value)}
                 className="registerInput" placeholder="Enter Your Username..."/>
                <label>Email</label>
                <input type="text" onChange={(e)=> setEmail(e.target.value)}
                className="registerInput" placeholder="Enter Your Email..."/>
                <label>Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value)}
                 className="registerInput" placeholder="Enter Your Password..."/>
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerloginButton">
            <Link className='link' to="/login">Login</Link>
            </button>
            {error && <span>Something Went Wrong</span>}
        </div>
    )
}