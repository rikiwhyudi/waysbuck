import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import MyProfile from "./pages/MyProfile";
import AddProducts from "./pages/AddProducts";
import AddTopping from "./pages/AddTopping";
import Transactions from "./pages/Transactions";

function App() {
 
   return (
    
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/details/:id" element={<ProductDetails />} />
      <Route exact path="/cart" element={<MyCart />} />
      <Route exact path="/profile" element={<MyProfile />} />
      <Route exact path="/add-products" element={<AddProducts />} />
      <Route exact path="/add-topping" element={<AddTopping />} />
      <Route exact path="/transactions" element={<Transactions />} />
    </Routes>
    </Router>
    
  );
}

export default App;