import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";       // ✅ Import Navbar
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <Router>
      {/* ✅ Navbar stays at the top on every page */}
      <Navbar />

      {/* Page routes below */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
