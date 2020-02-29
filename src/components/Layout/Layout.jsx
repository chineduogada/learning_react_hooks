import React from "react";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar";
import Aside from "../Aside/Aside";
import Products from "../Products/Products";
import StateUseHook from "../StateUseHook";

export default function Layout() {
  return (
    <div className="layout">
      <Aside />

      <main className="layout__main-area">
        <Navbar />

        <section className="layout__section">
          <StateUseHook />
          <Products />
        </section>
      </main>
    </div>
  );
}
