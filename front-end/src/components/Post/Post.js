import React, { useState } from "react";
import { Row, Col, Tag } from "antd";
import { initialData } from "../../actions/initialData";
import "antd/dist/antd.css";

import "./Post.scss";
import Comment from "../Comment/Comment";
import Author from "../Author/Author";

/**
 * @author
 * @function Post
 **/

const Post = () => {
  const [showComments, setShowComments] = useState(false);

  const handleShow = () => setShowComments(true);
  return (
    <>
      {initialData.posts.map((data, key) => {
        return (
          <Col key={key} className="container-column">
            <Row className="container-row-title">{data.title}</Row>
            <Row className="container-row-author">
              <Col span={12}>
                {initialData.users.map((user) => {
                  if (user.id === data.owner) {
                    return <Row> Author: {user.name}</Row>;
                  }
                })}
                <Row>Created at:{data.created_at}</Row>
              </Col>
              <Col span={12} className="container-column-tag">
                {data.tags.map((datatag, i) => {
                  return (
                    <div key={i}>
                      <Tag color="red">{datatag}</Tag>
                    </div>
                  );
                })}
              </Col>
            </Row>
            <Row className="container-row-content">{data.content}</Row>
            <Row className="container-row-reply" onClick={handleShow}>
              <Author post={data.id} comments={initialData.comments} />
            </Row>
            {showComments ? (
              <Comment
                className="container-row-comment"
                post={data.id}
                comments={initialData.comments}
              />
            ) : null}
          </Col>
        );
      })}
    </>
  );
};

export default Post;
