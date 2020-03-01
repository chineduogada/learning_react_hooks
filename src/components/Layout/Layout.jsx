import React from "react";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar";
import Aside from "../Aside/Aside";
import ClassCounter from "./../ClassCounter";
// import HookCounterOne from "../HookCounterOne";
import Products from "./../Products/Products";
import MouseLogger from "../../containers/MouseLogger/MouseLogger";
import HookCounterOne from "../HookCounterOne";

export default function Layout() {
  return (
    <div className="layout">
      <Aside />

      <main className="layout__main-area">
        <Navbar />

        <section className="layout__section">
          {/* <ClassCounter /> */}
          {/* <HookCounterOne /> */}
          {/* <MouseLogger render={(data, setData) => <ClassCounter />} /> */}
          <MouseLogger render={(data, setData) => <HookCounterOne />} />
          <Products />
        </section>
      </main>
    </div>
  );
}
