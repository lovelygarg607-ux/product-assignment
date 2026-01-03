// App.jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import productsData from "./Components/Data/Productdata";

function App() {
  const [products, setProducts] = useState(productsData);

  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === updatedProduct.id ? updatedProduct : item
      )
    );
  };

  return (
    <Outlet context={{ products, setProducts, updateProduct }} />
  );
}

export default App;





