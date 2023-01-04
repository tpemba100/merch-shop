import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Header = (e) => {
  const [search, setSearch] = useState("Random"); //the search values
  const [searchList, setSearchList] = useState([]);
  const products = useSelector((state) => state);

  const mapProduct = Object.entries(products);

  console.log(mapProduct);
  // const handleSubmit = (e) => {
  //   setSearch(e.target.value);
  //   console.log(mapProduct[1][1].title);
  // };

  return (
    // semantic UI
    <div class="ui fixed menu">
      <div class="ui secondary menu">
        <Link to={"/"}>
          <h2>The One Shop</h2>
        </Link>
        <Link to={"/"}>
          <a class="item ">Home</a>
        </Link>
        <Link to={"/shop"}>
          <a class="item">Shop</a>
        </Link>
        <Link to={"/about"}>
          <a class="item">Categories</a>
          {/* try addding a drop down */}
        </Link>
        <Link to={"/contact"}>
          <a class="item">Contact Us</a>
        </Link>
      </div>

      <div class="right menu">
        <div class="item">
          <div class="ui search">
            <div class="ui icon input">
              <input
                class="prompt"
                type="text"
                placeholder="Search countries..."
                onChange={(e) => setSearch(e.target.value)}
                // onChange={handleSubmit}
              />
              <i class="search icon"></i>
            </div>
            <div class="results" style={{ display: "block" }}>
              {mapProduct
                // .filter((product) => {
                //   product[1].title.toLowerCase().includes(search);
                // })
                .map(
                  (product, index) => (
                    <div key={index}>{product[1].title}</div>
                  )
                  // console.log(product[1].title);
                )}
            </div>
          </div>
        </div>
        <div class="item">
          <button class="ui icon button">
            <i class="shop icon"></i>
          </button>
        </div>
        <a class="ui item">Logout</a>
      </div>

      {/* <div class="ui secondary  menu">
        <div class="right menu aligned center">
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
          </div>

          <button class="ui icon button">
            <i class="shop icon"></i>
          </button>

          <a class="ui item">Logout</a>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
