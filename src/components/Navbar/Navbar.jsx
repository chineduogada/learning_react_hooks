import React from "react";
import "./Navbar.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import Brand from "./../Brand/Brand";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Brand />
        </li>

        <li className="navbar__item">
          <span className="avatar"></span>
          <span className="navbar__bars">
            <AiFillPlusCircle />
          </span>
        </li>
      </ul>
    </nav>
  );
}
