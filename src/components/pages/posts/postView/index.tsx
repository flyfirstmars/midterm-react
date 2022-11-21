import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CommentModel} from "../../../../types";
import CommentItem from "../commentItem/index";

const PostView = () => {
    const {id} = useParams();
    const [title, setTitle] = useState();
    const [comments, setComments] = useState<CommentModel[]>([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => {
                setTitle(value.title)
            })
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(value => value.json())
            .then(value => {
                setComments(value)
            })
    }, [id]);


    return (
        <div className="PostView">
            <h1>{title}</h1>
            {comments.map(comment => <CommentItem info={comment} key={comment.id}/>)}
        </div>
    );
}

export default PostView;