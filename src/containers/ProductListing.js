import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const [data, setData] = useState([]); //This is the stored products State

  const products = useSelector((state) => state); // Getting the products data from store
  const dispatch = useDispatch();

  //Filter Component
  // -> filters only the correct category thru the local State
  // --> filtered data is in curentList
  // --> disptach the filter data to store products
  const filterProduct = (cat) => {
    const currentList = data.allProducts.products.filter(
      (x) => x.category === cat
    );
    console.log("this is filtered producta : " + currentList);
    dispatch(setProducts(currentList));
  };

  //Fetching Data
  //--> Axios to get data w/ error.
  //--> dispatch the response data to store in products
  //--> Updating local data State from the redux product store
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
    setData(products);
  };

  //runs the fetching Api function only once at beginning
  useEffect(() => {
    fetchProducts();
    console.log("its fetching again");
  }, []);

  console.log("products: ", products);
  console.log("Saved data : ", data);

  return (
    <div className="ui grid container">
      {/* Filter */}
      <div class="ui five buttons">
        <button
          class="ui button "
          onClick={() => fetchProducts()} //runs the function to fetch API again,not good code
        >
          All
        </button>
        <button
          class="ui button "
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          class="ui button "
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button class="ui button " onClick={() => filterProduct("electronics")}>
          Electronics
        </button>
        <button class="ui button " onClick={() => filterProduct("jewelery")}>
          Jewelery
        </button>
      </div>

      <ProductComponent />
    </div>
  );
};

export default ProductListing;
