import {CommentModel} from "../../../../types";

interface CommentItemProps {
    info: CommentModel
}

const CommentItem = ({info: {id, name, body}}: CommentItemProps) => {
    return (
        <div className="Comment">
            <h3>{name}</h3>
            <p>{body}</p>
        </div>
    );
}

export default CommentItem;