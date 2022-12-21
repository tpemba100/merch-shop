import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // semantic UI
    <div class="ui fixed menu">
      <div class="ui container center">
        <Link to={"/"}>
          <h2>The One Shop</h2>
        </Link>
        <a class="active item ">Home</a>
        <a class="item">Shop</a>
        <a class="item">About</a>
        <a class="item">Contact</a>
      </div>
      <div class="ui secondary  menu">
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
      </div>
    </div>
  );
};

export default Header;
