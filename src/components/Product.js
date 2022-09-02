import React from "react";
import "../App.css";
const Product = (props) => {
  const { name, price, img, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />

      <div className="product-info">
        <p>{name}</p>
        <p>price: {price}</p>
        <p>
          <small>Seller : {seller}</small>
        </p>
        <p>
          <small>Ratings : {ratings}</small>
        </p>
      </div>
      <button className ="cart-button" onClick={()=> props.addToCart(props.product)} >Add to cart</button>
    </div>
  );
};

export default Product;
