import React from "react";
import Product from "../Product/Product";
import useResource from "./../../Hooks/useResource";
import Spinner from "./../Spinner/Spinner";

export default function Products() {
  const [data] = useResource("http://jsonplaceholder.typicode.com/posts");

  return (
    <div className="products">
      {data.loading ? (
        <Spinner />
      ) : data.error ? (
        <h3>{data.error}</h3>
      ) : (
        data.payload.map(product => <Product key={product.id} data={product} />)
      )}
    </div>
  );
}
