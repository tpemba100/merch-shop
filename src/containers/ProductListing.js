import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  // const [updatedList, setUpdatedList] = useState([]);
  // const updatedList = [];

  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const filterProduct = (cat) => {
    const currentList = products.allProducts.products.filter(
      (x) => x.category === cat
    );
  };
  // const filterProduct = (cat) => {
  //   setUpdatedList(
  //     products.allProducts.products.filter((x) => x.category === cat)
  //   );
  //   setFilter(updatedList);
  //   console.log(updatedList);
  //   console.log();
  // };

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
    setData(response.data);
  };

  useEffect(() => {
    fetchProducts();
    // dispatch(setProducts(data));
  }, []);

  console.log("products: ", products);

  return (
    <div className="ui grid container">
      {/* Filter */}
      <div class="ui five buttons">
        <button class="ui button " onClick={() => setFilter(data)}>
          All
        </button>
        <button
          class="ui button "
          onClick={() => filterProduct("men's clothing")}
          // onClick={() => filterProduct()}
        >
          Men's Clothing
        </button>
        <button
          class="ui button "
          // onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          class="ui button "
          // onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
        <button
          class="ui button "
          // onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
      </div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
