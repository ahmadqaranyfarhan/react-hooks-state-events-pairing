// Comments.js
import React from "react";

function Comments({ comments }) {
  return (
    <div>
      <h1>Comments:</h1>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>User: {comment.user}</p>
          <p>Comment: {comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
