import React from "react";
import "./Navbar.scss";
import { AiFillPlusCircle, AiOutlineShoppingCart } from "react-icons/ai";
import Brand from "./../Brand/Brand";
import Avatar from "../Avatar/Avatar";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Brand />
        </li>

        <li className="navbar__item">
          <Avatar />

          <AiFillPlusCircle className="navbar__icon" />
          <AiOutlineShoppingCart className="navbar__icon" />
        </li>
      </ul>
    </nav>
  );
}
