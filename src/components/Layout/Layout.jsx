import React from "react";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar";
import Aside from "../Aside/Aside";
import Products from "./../Products/Products";
import HookCounterInterval from "../CounterInterval/HookCounterInterval";
// import ClassCounterInterval from "../CounterInterval/ClassCounterInterval";

export default function Layout() {
  return (
    <div className="layout">
      <Aside />

      <main className="layout__main-area">
        <Navbar />

        <section className="layout__section">
          {/* <ClassCounterInterval /> */}
          <HookCounterInterval />
          <Products />
        </section>
      </main>
    </div>
  );
}
