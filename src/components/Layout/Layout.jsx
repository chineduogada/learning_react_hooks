import React from "react";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar";
import Aside from "../Aside/Aside";
import Products from "./../Products/Products";
import Resource from "../Resource/Resource";

export default function Layout() {
  return (
    <div className="layout">
      <Aside />

      <main className="layout__main-area">
        <Navbar />

        <section className="layout__section">
          {/* <ClassCounterInterval /> */}
          <Resource />
          <Products />
        </section>
      </main>
    </div>
  );
}
