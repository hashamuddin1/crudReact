import React, { useState, useEffect } from "react";

export default function UpdateProduct(props) {
  const [showDiv, setshowDiv] = useState(false);
  const [productTitle, setproductTitle] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productStock, setproductStock] = useState("");
  const [productBrand, setproductBrand] = useState("");
  const handleValueTitle = (event) => {
    setproductTitle(event.target.value);
  };
  const handleValuePrice = (event) => {
    setproductPrice(event.target.value);
  };

  const handleValueStock = (event) => {
    setproductStock(event.target.value);
  };

  const handleValueBrand = (event) => {
    setproductBrand(event.target.value);
  };

  const updateProduct = () => {
    fetch(`https://dummyjson.com/products/${props.productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: productTitle,
        price: productPrice,
        stock: productStock,
        brand: productBrand,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    setproductTitle("");
    setproductPrice("");
    setproductStock("");
    setproductBrand("");
    setshowDiv(true);
    setTimeout(() => {
      setshowDiv(false);
    }, 3000);
  };
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${props.productId}`)
      .then((res) => res.json())
      .then((result) => {
        setproductTitle(result["title"]);
        setproductPrice(result["price"]);
        setproductStock(result["stock"]);
        setproductBrand(result["brand"]);
      });
  }, []);
  return (
    <>
      {showDiv && (
        <div class="alert alert-primary" role="alert">
          Product has been Updated!
        </div>
      )}
      <div className="mainHome">
        <h2>Update Product</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleValueTitle}
            value={productTitle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleValuePrice}
            value={productPrice}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Stock
          </label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleValueStock}
            value={productStock}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Brand
          </label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleValueBrand}
            value={productBrand}
          />
        </div>

        <button
          type="submit"
          onClick={updateProduct}
          className="btn btn-primary"
        >
          Update
        </button>
      </div>
    </>
  );
}
