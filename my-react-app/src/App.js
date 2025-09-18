import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./examples/ProductDetails";
import ProductList from "./examples/ProductList";

const App = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default App;