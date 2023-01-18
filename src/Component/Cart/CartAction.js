import {
  ADD_ITEMS,
  ADD_MULTI_ITEMS,
  REMOVE_ITEMS,
  REMOVE_MULTI_ITEMS,
} from "./Redux/CartActionType";

const addItems = () => {
  return {
    type: ADD_ITEMS,
  };
};

const removeItems = () => {
  return {
    type: REMOVE_ITEMS,
  };
};

const addMultiItems = (value) => {
  return {
    type: ADD_MULTI_ITEMS,
    payload: value,
  };
};

const removeMultiItems = (value) => {
  return {
    type: REMOVE_MULTI_ITEMS,
    payload: value,
  };
};

export { addItems, removeItems, addMultiItems, removeMultiItems };
