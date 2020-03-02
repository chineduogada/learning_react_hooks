import React, { useContext, useState } from "react";
import "./Aside.scss";
import { appContext } from "../../appContext";
import Navbar from "../Navbar/Navbar";

export default function Aside() {
  const [state] = useContext(appContext);

  const [list] = useState([
    { title: "recent products", path: "/recent-products" },
    { title: "most popular products", path: "/most-popular-products" },
    { title: "about us", path: "/about-us" },
    { title: "contact us", path: "/contact-us" },
    { title: "my portfolio", path: "/my-portfolio" }
  ]);

  const getAsideClassName = () => {
    let className = "aside";
    return state.isAsideOpen ? (className += "--show") : className;
  };

  const getListItemClassName = item => {
    let className = "aside__item";
    return state.currentMainContent === item.title
      ? (className += "--active")
      : className;
  };

  return (
    <aside className={getAsideClassName()}>
      <Navbar />

      <ul className="aside__list">
        {list.map(item => (
          <li key={item.path} className={getListItemClassName(item)}>
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
