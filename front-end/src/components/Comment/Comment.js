import React from "react";

import "./Comment.scss";
/**
 * @author
 * @function Comment
 **/

const Comment = (props) => {
  return (
    <>
      {props.comments.map((comment) => {
        if (comment.post === props.post)
          return (
            <div className="comments" key={comment.id}>
              <a className="comment__avatar">
                <img src="https://th.bing.com/th/id/R.f2494f16e65fb98aa56dcbab63be0bec?rik=fqtqgDsQlb3TXw&pid=ImgRaw&r=0" />
              </a>
              <div className="comment-info">
                <div className="comment-info__name">
                  {comment.name} <span>a day ago</span>
                </div>
                <p className="comment-info__content">{comment.content}</p>
                <div className="comment-info__reply">Reply to</div>
              </div>
            </div>
          );
      })}
    </>
  );
};

export default Comment;
