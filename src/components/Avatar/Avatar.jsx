import React from "react";
import "./Avatar.scss";
import avatarImg from "../../assets/pubg.jpg";
import { AiFillCaretDown } from "react-icons/ai";

export default function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar__img_wrapper">
        <img src={avatarImg} alt="avatar" className="avatar__img" />
      </div>

      <AiFillCaretDown className="avatar__icon" />
    </div>
  );
}
