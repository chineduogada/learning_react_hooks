import React from "react";

export default function Layout() {
  return (
    <div className="layout">
      <aside className="layout__aside">
        <div className="layout__brand">MY E-SHOP</div>
      </aside>

      <main className="layout__main-area">
        <nav className="layout__main-area__nav-bar">
          <ul className="layout__main-area__nav-bar__list">
            <li className="layout__main-area__nav-bar__item"></li>
            <li className="layout__main-area__nav-bar__item"></li>
            <li className="layout__main-area__nav-bar__item"></li>
          </ul>
        </nav>

        <section className="layout__main-area__section"></section>
      </main>
    </div>
  );
}
