import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
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
