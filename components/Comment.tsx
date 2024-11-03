"use client";
import React, { useState } from "react";

interface CommentData {
  name: string;
  comment: string;
}

const Comment = () => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "" || name.trim() === "") return; // Ensure both fields are filled

    const newCommentData: CommentData = {
      name: name,
      comment: newComment,
    };

    setComments((prevComments) => [...prevComments, newCommentData]);
    setNewComment(""); // Clear the comment input after submission
    setName(""); // Clear the name input after submission
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="my-6">
        {comments.map((commentData, index) => (
          <div
            key={index}
            className="bg-white p-3 mb-2 rounded-md shadow-sm border border-gray-200"
          >
            <p className="font-bold">{commentData.name}</p>
            <p>{commentData.comment}</p>
          </div>
        ))}{" "}
      </div>
      <div className="w-full max-w-2xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </div>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleAddComment}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Comment;
