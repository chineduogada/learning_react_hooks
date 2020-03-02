import React, { useState, useEffect } from "react";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar";
import Aside from "../Aside/Aside";
import Products from "./../Products/Products";
import Product from "../Product/Product";
import axios from "axios";
import Button from "../Button/Button";
import Spinner from "./../Spinner/Spinner";
import Input from "../Input/Input";

export default function Layout() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(1);
  const [tempId, setTempId] = useState(id);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${tempId}`)
      .then(({ data: post }) => {
        setLoading(false);
        setPost(post);
      })
      .catch(ex => {
        setLoading(false);
        console.log(ex);
      });
  }, [tempId]);

  const fetchData = () => {
    setTempId(id);
  };

  return (
    <div className="layout">
      <Aside />

      <main className="layout__main-area">
        <Navbar />

        <section className="layout__section">
          {/* <ClassCounterInterval /> */}
          <div style={{ border: "2px solid", padding: ".375rem" }}>
            <Input
              type="text"
              value={id}
              onChange={e => setId(e.currentTarget.value)}
              label="enter post id"
              required
            />
            <Input label="testing" value={id} />
            <Button onClick={fetchData}>
              {loading ? <Spinner /> : "fetch post"}
            </Button>
            <Product data={post} />
          </div>
          <Products />
        </section>
      </main>
    </div>
  );
}
