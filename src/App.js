import React, { useState } from "react";
import AddProduct from "./component/AddProduct";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateProduct from "./component/UpdateProduct";

function App() {
  const [prodId, setprodId] = useState("");

  const updateProductId = (data) => {
    setprodId(data);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home productId={updateProductId} />}
          />
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route
            exact
            path="/updateProduct"
            element={<UpdateProduct productId={prodId} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
