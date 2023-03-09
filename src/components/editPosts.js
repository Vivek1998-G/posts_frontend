import React from "react";
import axios from 'axios';
import './edit.css'
import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";


export default function Edite () {
   const naviagat=useNavigate()
    let params = useParams();


    const Epost =JSON.parse(params.EditArr)

    const [content, setContent] = useState(Epost.content)
    const [title, setTitle] = useState(Epost.title)

const Edit=() => {
    try{
        axios.put('http://localhost:4000/editPosts/'+ Epost.id,
            {
                "title": title,
                "content": content,
                
            })
            naviagat('/')
        }
        catch(err){
            console.log(err)
        }
    }

    return <>
     <div className="Edit"><h2 id="AT">Please Edit Your Posts Here</h2>
        <div className="midd"> <h3 id="Ed"> Edit Title</h3><input value={title} onChange={e => (setTitle(e.target.value))}></input>
            <br></br> <h3>Edit Content</h3><textarea value={content} onChange={e => (setContent(e.target.value))}></textarea><br></br>
            <button  onClick={Edit}>Edit Posts</button>
        </div>
    </div>
        
        </>
}