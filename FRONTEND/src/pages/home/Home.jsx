import React, { useEffect, useState } from 'react'

import Header from "../../components/header/Header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/SideBar";
import "./home.css";
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Home() {
    const [posts, setPosts] = useState([])
    const {search} = useLocation()
    // console.log(search)

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("http://localhost:4000/posts/"+ search)
                                      // http://localhost:4000/posts/?username=Hamza
            setPosts(res.data)
        }
        fetchPosts()
       
    },[search])

    return (<>
        <Header/>
        <div className="home">
            <Posts posts={posts} />
            <Sidebar/>
        </div>
    </>)
}