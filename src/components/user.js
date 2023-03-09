import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import './user.css'
import { Link } from "react-router-dom";
import { useNavigate, } from "react-router";

export function User() {
    const [posts, setPosts] = useState([])

    const getData = async() => {
        try {
           await axios.get('http://localhost:4000/getPosts')
                .then((response) => setPosts(response.data))
                .catch((err) => console.log(err))
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(posts)

    const navigate = useNavigate()


    const Delete = (id) => {
       try{
            axios.delete(`http://localhost:4000/deletePosts/${id}`)
           getData()
       }
       catch(err){
        console.log(err)
       }
    }
    const navigat = useNavigate()
    function LogOut() {
        navigat('/')
    }

   const View =(id)=>{
navigat(`/ViewPosts/${id}`)
   }

    const Edit = (post) => {
        
       let data=JSON.stringify(post)
       console.log(data)
        navigate(`/EditPosts/${data}`)
    }

    return (<div className="mid">
        <div className="us"  >
          <h1>Welcome To Home!!!</h1> </div>
        <button id="new" onClick={() => navigate('/CreatePosts')}>Add New Posts</button>
        <div className="yes">  {
           posts && posts.map((post) => {
                return (<div className="post">
                    <h2>Title:- <span id="title">{post.title}</span></h2>
                    <p>{post.content}</p>
                    <button className="Edt" onClick={event => Edit({ "id": post.id, "title": post.title, "content": post.content })} >Edite </button>
                    <button className="btnn" onClick={event =>Delete(post.id)}>Delete</button>
                     <button onClick={event =>View(post.id)}>View</button>
                </div>)
            })
        }</div>
<h1>Thank You !!!</h1>
    </div>)
}