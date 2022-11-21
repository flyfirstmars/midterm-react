import React from "react";
import {useEffect, useState} from "react";
import {PostModel} from "../../../types";
import PostItem from "./postItem";
const Posts = () => {
const [posts, setPosts] = useState<PostModel[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            })
    }, [])
    return (
        <div className="Posts">
            {posts.map(post => <PostItem info={post} key={post.id}/>)}
        </div>
    );
}


export default Posts;