import { combineReducers } from "redux";
import {
  productReducer,
  productCopyReducer,
  selectedProductReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  allProductsCopy: productCopyReducer,
  product: selectedProductReducer,
});

export default reducers;
