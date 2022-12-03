import React, { useContext, useEffect, useState } from 'react'
import "../components/singlePost/singlepost.css"
// import Imagesjan from "../../img/new.jpg"
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'



export default function AboutPage(){
    // const { user } = useContext(Context)
    const { user } = useContext(Context)
    const [post , setPost] = useState('')
    const location = useLocation()
    // console.log(location)
    const path = location.pathname.split('/')[2]
    //  console.log(path)
     useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("http://localhost:4000/posts/6386fd4903511a8e069c10d3")
            // console.log(res)
            setPost(res.data)
        }
        getPost()
     },[path])

     const PF = "http://localhost:4000/images/"

     // =========DELETE SINGLE POST==================
     const handleDelete = async()=>{
        try{
            await axios.delete(`http://localhost:4000/posts/6386fd4903511a8e069c10d3`,{
                data:{username:user.username}
            })
            window.location.replace("/")
        }
        
        catch(error){
            alert(error)
        }
     }
     // ==========Update Post=======================
    
    return(
        <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src={PF+post.photo} alt="loading..." />
            <h1 className="singlePostTitle">{post.title}
         {user.username === "admin" && (
            <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>

            </div>  
         )}
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: 
                <Link to={`/?username=${post.username}`}>
                <b>{post.username}</b>
                </Link>
                </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>

            </div>
            <p className="singlePostDesc">{post.desc}</p>
        
        </div>
    </div>
    )
}