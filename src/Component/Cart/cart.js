import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  removeItems,
  addMultiItems,
  removeMultiItems,
} from "./CartAction";

function Cart() {
  const dispatch = useDispatch();

  const Item = useSelector((state) => state);

  console.log(Item);

  const [value, setValue] = useState("");
  console.log(typeof value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const totalCartItem = Item.cart.numOfItems;

  const addMultiple = () => {
    dispatch(addMultiItems(value));
  };

  const removeMultiple = () => {
    dispatch(removeMultiItems(value));
  };

  return (
    <>
      <div>
        <div>
          <h1>{totalCartItem}</h1>
        </div>
        <form>
          <input
            type="text"
            name="message"
            onChange={handleChange}
            value={value}
          />
          <div>
            <button type="button" onClick={() => dispatch(addItems())}>
              add
            </button>
            <button type="button" onClick={() => dispatch(removeItems())}>
              remove
            </button>
            <button type="button" onClick={addMultiple}>
              addMultiItems
            </button>
            <button type="button" onClick={removeMultiple}>
              removeMultiItems
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cart;
