import React from "react";
import "./Layout.scss";
import { AiFillPlusCircle } from "react-icons/ai";

export default function Layout() {
  return (
    <div className="layout">
      <aside className="layout__aside">
        <div className="layout__brand">MY E-SHOP</div>
      </aside>

      <main className="layout__main-area">
        <nav className="layout__main-area__nav-bar">
          <ul className="layout__main-area__nav-bar__list">
            <li className="layout__main-area__nav-bar__item">MY E-SHOP</li>

            <li className="layout__main-area__nav-bar__item">
              <span className="avatar"></span>
              <span className="layout__main-area__nav-bar__bars">
                <AiFillPlusCircle />
              </span>
            </li>
          </ul>
        </nav>

        <section className="layout__main-area__section"></section>
      </main>
    </div>
  );
}
