import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
  // We get a state of addItems
  const state = useSelector((state) => state.addItems);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2 me-2">
          <span className="fa fa-shopping-cart me-1"></span>
          Cart ({state.length})
      </NavLink>
    </>
  )
}

export default CartBtn;