import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route path="/shop" exact element={<ProductListing />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route> 404 Not Found </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//https://fakestoreapi.com/docs
//https://www.youtube.com/watch?v=0W6i5LYKCSI

// Next Features
// https://www.youtube.com/watch?v=SSXA2XluIBU
