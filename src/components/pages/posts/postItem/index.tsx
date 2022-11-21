import { PostModel} from "../../../../types";
import {Link} from "react-router-dom";
import React from "react";

interface PostsProps {
    info: PostModel
}

const PostItem: React.FC<PostsProps> = ({info: {id, title, body}}) => {
    return (
        <div className="PostItem">
            <Link to={`/posts/${id}`} className={"post_title"}>
                {title}
            </Link><p className={"post_body"}>{body}</p>
        </div>
    );
}

export default PostItem;