import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
import './Auth.css'

export default function Create() {
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const naviagat=useNavigate()


    const Add = () => {
        try{
        axios.post('http://localhost:4000/writePosts',
          {
                "title": title,
                "content": content,
            }
        )
        naviagat('/')
        }
        catch(err){
            console.log(err)
        }
    }

    return(
    <div className="Add"><h2 id="AT">Please Add Your Posts</h2>
        <div className="midd"> <h3 id="P">Enter Title</h3><input value={title} onChange={e => (setTitle(e.target.value))}></input>
            <br></br> <h3 >Enter Content</h3><textarea value={content} onChange={e => (setContent(e.target.value))}></textarea><br></br><button className="mid" onClick={Add}>Add pposts</button>
        </div>
    </div>)
}