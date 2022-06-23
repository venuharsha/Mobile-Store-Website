import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.addItems);
  const dispatch = useDispatch();

  const handleClose = (cartItem) => {
    dispatch(delItem(cartItem));
  };
  const increment = (cartItem) => {
    dispatch(addItem(cartItem));
  };
  const decrement = (cartItem) => {
    dispatch(delItem(cartItem));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="py-5 my-5 bg-light rounded-3">
        <div className="container py-5">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.img}
                alt={cartItem.title}
                height="200px"
                width="200px"
              ></img>
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold my-5">${cartItem.price}</p>
            </div>
            <div className="incdecbtns container col-md-4">
              <button
                onClick={() => increment(cartItem)}
                className="increment btn btn-outline-success fw-bold"
              >
                +
              </button>
              <p className="lead fw-bold">Edit</p>
              <button
                onClick={() => decrement(cartItem)}
                className="decrement btn btn-outline-danger fw-bold"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <>
        <div className="py-5 my-5 bg-light rounded-3">
          <div className="container py-4">
            <div className="d-flex justify-content-center">
              <h3>Your cart is empty</h3>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <NavLink to="/products" className="btn btn-outline-primary">
            Go to Products
          </NavLink>
        </div>
      </>
    );
  };

  const checkoutbtn = () => {
    return (
      <div className="container">
        <div className="row" style={{ margin: "5px" }}>
          <NavLink
            to="/products"
            className="btn btn-outline-primary w-25 mx-auto mb-5"
          >
            Go to Products
          </NavLink>
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary w-25 mx-auto mb-5"
          >
            Proceed to checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && checkoutbtn()}
    </>
  );
};

export default Cart;
