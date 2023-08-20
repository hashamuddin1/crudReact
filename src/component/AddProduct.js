import React, { useState } from "react";
import "../App.css";

export default function AddProduct() {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [showDiv, setshowDiv] = useState(false);

  const handleTitleOnChange = (event) => {
    setProductTitle(event.target.value);
  };

  const handlePriceOnChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleStockOnChange = (event) => {
    setProductStock(event.target.value);
  };

  const handleCategoryOnChange = (event) => {
    setProductCategory(event.target.value);
  };

  const handleBrandOnChange = (event) => {
    setProductBrand(event.target.value);
  };

  const submitProduct = () => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: productTitle,
        price: productPrice,
        stock: productStock,
        category: productCategory,
        brand: productBrand,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    setProductTitle("");
    setProductPrice("");
    setProductStock("");
    setProductCategory("");
    setProductBrand("");
    setshowDiv(true);
    setTimeout(() => {
      setshowDiv(false);
    }, 3000);
  };
  return (
    <>
      {showDiv && (
        <div class="alert alert-primary" role="alert">
          New Product has been Added!
        </div>
      )}
      <div className="mainHome">
        <h2>Add New Product</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            autoComplete="off"
            onChange={handleTitleOnChange}
            value={productTitle}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="text"
            autoComplete="off"
            onChange={handlePriceOnChange}
            value={productPrice}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Stock
          </label>
          <input
            type="text"
            autoComplete="off"
            onChange={handleStockOnChange}
            className="form-control"
            value={productStock}
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Category
          </label>
          <input
            type="text"
            autoComplete="off"
            onChange={handleCategoryOnChange}
            value={productCategory}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Brand
          </label>
          <input
            type="text"
            autoComplete="off"
            onChange={handleBrandOnChange}
            value={productBrand}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          type="submit"
          onClick={submitProduct}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </>
  );
}
