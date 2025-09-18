import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./examples/ProductDetails";
import ProductList from "./examples/ProductList";
import DynamicGrid from "./examples/DynamicGrid";
import GlobalStyles from "./examples/GlobalStyles";

const App = () => {

  const items = ['item1', 'item2', 'item3', 'item4'];
  return (
    <div>
      <GlobalStyles />
      <h1>Global Styles Example</h1>
      <DynamicGrid items={items} />
    </div>
  );
};

export default App;