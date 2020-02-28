import React, { useContext } from "react";
import "./Navbar.scss";
import { AiFillPlusCircle, AiOutlineShoppingCart } from "react-icons/ai";
import Brand from "./../Brand/Brand";
import Avatar from "../Avatar/Avatar";
import { appContext } from "./../../appContext";

export default function Navbar() {
  const [, setState] = useContext(appContext);

  const handleAsideToggle = () => {
    setState(state => ({ ...state, isAsideOpen: !state.isAsideOpen }));
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Brand />
        </li>

        <li className="navbar__item">
          <Avatar />

          <AiFillPlusCircle
            className="navbar__icon"
            onClick={handleAsideToggle}
          />
          <AiOutlineShoppingCart className="navbar__icon" />
        </li>
      </ul>
    </nav>
  );
}
