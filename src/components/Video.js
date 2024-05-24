"use client";
import React, { useState } from "react";
import Comments from "./Comments";

function Video({ video }) {
  const [changeNumber, setChangeNumber] = useState(0);
  const [showComments, setShowComments] = useState(true);

  function handleUpVote() {
    setChangeNumber(changeNumber + 1);
    video.upvotes += 1;
  }

  function handleDownvote() {
    setChangeNumber(changeNumber - 1);
    video.downvotes += 1;
  }

  function toggleComments() {
    setShowComments(!showComments);
  }

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <div>
        <h1>{video.title}</h1>
        <h6>
          {video.views} | Uploaded {video.createdAt}
        </h6>
      </div>
      <div className="btn">
        <button onClick={handleUpVote} className="btn1">
          {video.upvotes}👍🏻
        </button>
        <button onClick={handleDownvote}>{video.downvotes}👎🏻</button>
      </div>
      <div className="btn2">
        <button onClick={toggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>
      {showComments && <Comments comments={video.comments} />}
    </div>
  );
}

export default Video;
