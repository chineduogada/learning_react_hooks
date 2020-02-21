import React, { useState } from "react";
import "./Post.scss";
import Button from "../Button/Button";
import { AiFillPlusCircle } from "react-icons/ai";
import EditableText from "../EditableText/EditableText";

const MAX_POST_LENGTH = 20;

export default function Post() {
  const [message, setMessage] = useState("Ran around the lake.");

  const handlePostMessage = ({ currentTarget: input }) => {
    if (input.value.length <= MAX_POST_LENGTH) {
      setMessage(input.value);
    }
  };

  return (
    <form className="post">
      <div className="post__msg">
        <textarea
          className="post__msg-input"
          name="message"
          cols="30"
          rows="10"
          value={message}
          onChange={handlePostMessage}
        ></textarea>
        <h6
          className={
            message.length === MAX_POST_LENGTH
              ? "post__msg-status--max"
              : "post__msg-status"
          }
        >
          {message.length} / {MAX_POST_LENGTH}
        </h6>
      </div>
      <div>
        <Button
          label={
            <span>
              <AiFillPlusCircle /> post
            </span>
          }
        />
        <EditableText />
      </div>
    </form>
  );
}
