import React from "react";
import ProductListing from "./ProductListing";
import { useSelector } from "react-redux";
import img from "../img/Hero.jpg";

const Home = () => {
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;
  return (
    <>
      <div className="ui fluid image">
        <img src={img} />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            paddingRight: "50px",
            width: "100%",
            height: "auto",
          }}
        >
          <h1 style={{ float: "right" }}>Welcome to The One Shop</h1>
        </div>
      </div>

      <ProductListing />
    </>
  );
};

export default Home;
