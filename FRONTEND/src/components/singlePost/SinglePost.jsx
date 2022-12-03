import React, { useContext, useEffect, useState } from 'react'
import "./singlepost.css"
// import Imagesjan from "../../img/new.jpg"
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'



export default function SinglePost(){
    const { user } = useContext(Context)
    const [post , setPost] = useState('')
    const location = useLocation()
    // console.log(location)
    const path = location.pathname.split('/')[2]
    //  console.log(path)
     useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("http://localhost:4000/posts/"+path)
            // console.log(res)
            setPost(res.data)
            // for update Post
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
     },[path])

     const PF = "http://localhost:4000/images/"

     // =========DELETE SINGLE POST==================
     const handleDelete = async()=>{
        try{
            await axios.delete(`http://localhost:4000/posts/${post._id}`,{
                data:{username:user.username}
            })
            window.location.replace("/")
        }
        
        catch(error){
            alert(error)
        }
     }
     // =========== update Post ====================
     const [ updateMode,setUpdateMode ] = useState(false)
     const [ title,setTitle ] = useState("")
     const [ desc,setDesc ] = useState("")
     const handleUpdate = ()=>{
        setUpdateMode(true) 
     }
     const HandleUpdateAllPost = async()=>{
        // alert("updalkfasdlkfj")
        try{
            await axios.patch(`http://localhost:4000/posts/${post._id}`,{
                username:user.username,
                title,desc
            })
            setUpdateMode(false)
        }catch(error){
            alert(error)
        }
     }
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={PF+post.photo} alt="loading..." />
                <h1 className="singlePostTitle">
                    {/* {post.title} */}
            {/* {updateMode? alert("edite is on"):null} */}
            {updateMode? (<><input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/></>): title}
                {/* {title} */}
             {post.username === user.username && (
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit" onClick={handleUpdate}></i>
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
                <p className="singlePostDesc">
                    {/* {desc} */}
                {updateMode? (<><textarea style={{width:"70vw"}} type="text" value={desc} onChange={(e)=> setDesc(e.target.value)}/></>): desc}

                    {/* {post.desc} */}
                    </p>
                <i>{updateMode? (<><button onClick={HandleUpdateAllPost}>update</button></>): null} </i>
            
            </div>
        </div>
    )
}