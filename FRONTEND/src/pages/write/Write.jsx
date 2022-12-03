import "./write.css"
// import Imagesjan from "../../img/new2.jpg"
import React, { useState } from 'react'
import { useContext } from "react"
import { Context } from "../../Context/Context"
import axios from "axios"



export default function Write(){
    const [ title,setTitle ] = useState("")
    const [ categories,setCat ] = useState("")
    const [ desc,setdisc ] = useState("")
    const [ file,setFile ] = useState(null)
    // const [ photo,setPhoto ] = useState()
    // const [ username,setUsername ] = useState("")
    const { user } = useContext(Context)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const newPost = {
            username: user.username,
            title,
            categories,
            desc,
            
        }
        if(file){
            const  data = new FormData()
            const filename = Date.now() + file.name
            data.append("name",filename)
            data.append("file",file)
            newPost.photo = filename
            try{
                await axios.post("http://localhost:4000/upload",data) 
            }catch(error){
                alert(error)
            }
        }   
        try{
            const res = await axios.post("http://localhost:4000/posts", newPost)
            window.location.replace("/post/"+res.data._id)
        
            // alert(user.username)
            alert("Post Uploaded..")
        }catch(error){
            alert(error)
        }

    }
    return(
        <>{user? 
        <div className="Write">
            {file && <img className="writeImg" src={URL.createObjectURL(file)} alt="" /> }
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" onChange={(e)=> setFile(e.target.files[0])}
                     id="fileInput" style={{display:"none"}}/>
                    <input type="text" onChange={(e)=> setTitle(e.target.value)}
                     placeholder="Title" className="writeInput" autoFocus={true}/>
                     <input type="text" onChange={(e)=> setCat(e.target.value)}
                     placeholder="catagories" className="writeInput" autoFocus={true}/>
                     <br/>
                     {/* <input type="text" onChange={(e)=> setPhoto(e.target.value)}
                     placeholder="photo Link..." className="writeInput" autoFocus={true}/> */}
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell ur story" onChange={(e)=> setdisc(e.target.value)}
                    type="text" className="writeInput writeText" ></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>:null}
        </>
    )
}