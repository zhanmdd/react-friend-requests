import React from "react";



export default function Comment(props){
    function handleClick(event){
        let isAccepted = event.target.name;
        let commentId = event.target.value;
        (isAccepted==="approve") ? alert("The comment was approved!") : alert("The comment was rejected!");
        props.delComment(commentId);
    }

        return (
        <div className="comment">

            <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
            </a>
            

            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                    
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                
                <div className="text">
                    {props.text}
                </div>

            </div>   
            <button className="positive ui button" onClick={handleClick} name="approve" value={props.id}>Approve</button>
            <button className="negative ui button" onClick={handleClick} name="reject" value={props.id}>Reject</button>         
        </div>
)};