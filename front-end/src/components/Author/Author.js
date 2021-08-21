import React from "react";

/**
 * @author
 * @function Author
 **/

const Author = (props) => {
  let countComments = 0;
  props.comments.forEach((comment) => {
    if (comment.post === props.post) countComments++;
  });
  // console.log("count author: ", countComments);
  return (
    <>
      <span>{countComments} replies</span>
    </>
  );
};

export default Author;
