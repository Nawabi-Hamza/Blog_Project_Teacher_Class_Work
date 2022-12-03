import './post.css'
// import ImagesJan from "../../img/new.jpg"
import React from 'react'
import { Link } from 'react-router-dom'
const ImagesJan = "https://media.istockphoto.com/id/583809524/photo/alberta-wilderness-near-banff.jpg?b=1&s=612x612&w=0&k=20&c=-7tro3UbbvFxXEXlOIZNH7i_C4QQ1LI3jTsPnfi2mNU="
export default function Post({post}) {


    const PF = "http://localhost:4000/images/"
    return (
    <div className="post">
        <img className='postImg' src={post.photo? PF+post.photo:ImagesJan} alt="loading..." />
        <div className="postInfo">
            <div className="postCats">
               {post.categories.map((p)=>(
                <span className="postCat">{p}</span>
               ))}


            </div>
            <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
            </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postDesc'>{post.desc}</p>
    </div>
    )
}