import React from "react";
import "./Product.scss";
import Button from "../Button/Button";
import {
  AiFillLike,
  AiOutlineShoppingCart,
  AiFillStar,
  AiOutlineMore
} from "react-icons/ai";

export default function Product() {
  return (
    <article className="product">
      <div className="product__img-wrapper"></div>

      <div className="product__body">
        <div className="product__nav">
          <a href="/" className="product__nav-icon">
            <AiOutlineMore />
          </a>
        </div>

        <div className="product__content">
          <h3 className="product__title">the title</h3>
          <p className="product__paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            delectus inventore deleniti itaque libero. Nostrum?
          </p>
        </div>

        <div className="product__buttons">
          <span className="product__like-status">0 likes</span>

          <div>
            <Button primary>
              <AiFillLike /> Like
            </Button>

            <Button warning>
              <AiFillStar /> favorite
            </Button>

            <Button danger>
              <AiOutlineShoppingCart /> add to cart
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
