import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DATA from "../Data";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  {
    /* Now we need a product id which is passed from product page. */
  }
  const params = useParams();
  console.log(params);
  const prodDetail = DATA.filter((x) => x.id == params.id);
  const product = prodDetail[0];
  console.log(product);

  //We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const addtoCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center my-5 py-5 product">
            <img
              src={product.img}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h3 className="my-3">${product.price}</h3>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => addtoCart(product)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;