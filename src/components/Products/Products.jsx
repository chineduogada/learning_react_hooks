import React from "react";
import Product from "../Product/Product";
import Resource from "../Resource/Resource";

export default function Products() {
  return (
    <div className="products">
      <Resource
        url="http://jsonplaceholder.typicode.com/posts"
        render={data => data.payload.map(product => <Product />)}
      />
    </div>
  );
}
