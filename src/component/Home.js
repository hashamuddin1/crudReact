import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [productData, setProductData] = useState([]);
  const [showDiv, setshowDiv] = useState(false);
  const [deleteProductName, setdeleteProductName] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setProductData(result["products"]));
  }, []);

  const deleteProduct = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => setdeleteProductName(result.title));

    setshowDiv(true);
    setTimeout(() => {
      setshowDiv(false);
    }, 3000);
  };
  return (
    <>
      {showDiv && (
        <div className="alert alert-danger fixed-top" role="alert">
          A Product has been deleted of Title {deleteProductName}!
        </div>
      )}
      <div className="mainHome">
        <div className="headProduct">
          <h2>Product List</h2>
          <div>
            <button type="button" className="btn btn-primary">
              <Link
                to="/addProduct"
                style={{ color: "white", textDecoration: "none" }}
              >
                Add Product
              </Link>
            </button>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Category</th>
              <th scope="col">Brand</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>{item.category}</td>
                <td>{item.brand}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteProduct(item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      props.productId(item.id);
                    }}
                  >
                    <Link
                      to="/updateProduct"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Update
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
