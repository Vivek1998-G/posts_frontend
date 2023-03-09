import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import './view.css'


export default function View(){

    const navigat=useNavigate()

    let params = useParams();

    const [single_post,setSingle_pos]=useState()

    let id=params.id
console.log(id)
   
        const getData=async()=>{
            try{
        axios.get(`http://localhost:4000/getonePosts/${id}`).then(res=>setSingle_pos(res.data))
            }
            catch(err){
                console.log(err)
            }
        }
        useEffect(()=>{
            getData()
        },[])
       
    
console.log(single_post)

    return <>
    <div className="view"><h1 id='Vh1'>Your Post Details</h1>
      { single_post && single_post.map((post) => {
                return (<div className="Vpost">
                    <h2>{post.title}</h2>
                    <h4 id="VT">{post.content}</h4>
                   <h5>Created At:- {post.createdAt.substr(0,10)}
                   <span> Updated At:- {post.updatedAt?.substr(0,10)}</span></h5>
                </div>)
            })}
            <button id="Vbtn" onClick={()=>navigat('/')}>Back</button>
        </div></>
}