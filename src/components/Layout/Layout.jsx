import React from "react";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar";
import Brand from "./../Brand/Brand";

export default function Layout() {
  return (
    <div className="layout">
      <aside className="layout__aside">
        <div className="layout__brand">
          <Brand />
        </div>
      </aside>

      <main className="layout__main-area">
        <Navbar />

        <section className="layout__main-area__section"></section>
      </main>
    </div>
  );
}
