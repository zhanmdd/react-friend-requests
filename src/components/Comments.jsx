import React, {useState} from "react";
import faker from "faker";
import Comment from "./Comment";
import { Fab } from '@material-ui/core';

export default function Comments(){

    const [comments, setComments] = useState([]);
    let [id, setId] = useState(0);

    function generate(){
        const singleComment = {
            id: id,
            avatar: faker.image.image(),
            author: faker.fake("{{name.firstName}} {{name.lastName}}"),
            date: faker.fake("{{date.past}}").substring(0,24),
            text: faker.lorem.paragraph()
        };
        
        setComments(prevComments => {
            return [...prevComments, singleComment];
        })

        setId(id+1);
    }

    function deleteComment(id) {
        setComments((prevComments) => {
          return prevComments.filter((comment) => comment.id !== id);
        });
      }

    return (
        <div className="ui container comments">
            
            {comments.map((comment, index) => {
                return <Comment key={comment.id} id={comment.id}delComment={deleteComment} avatar = {comment.avatar} author={comment.author} date={comment.date} text={comment.text}/>
            })}
            
            <hr/>

            <Fab
            onClick={generate}
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add">
            Generate
            </Fab>
        </div>
    );
}