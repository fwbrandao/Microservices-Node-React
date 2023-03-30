import React from "react";

const CommentList = ({ comments }) => {
  
  const renderedComments = comments.map((comment) => {
    console.log("🚀 ~ file: CommentList.js:8 ~ renderedComments ~ comment:", comment)
    return <li key={comment.id}>{comment.status === 'rejected' ? "Bad word" : comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;