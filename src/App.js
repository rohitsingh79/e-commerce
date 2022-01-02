import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Home from "./home";
import Header from "./HomePage/Header";
import Register from "./HomePage/Register";
import Login from "./HomePage/Login";
import ProductList from "./HomePage/ProductList";
import ProductDescription from "./Products/ProductDescription";

export default function App() {
  return (
    <div>
      <Header></Header>
      <ProductList></ProductList>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/product/:productId" element={<ProductDescription />} />
      </Routes>
    </div>
  );
}
