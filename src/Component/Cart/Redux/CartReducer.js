import {
  ADD_ITEMS,
  ADD_MULTI_ITEMS,
  REMOVE_ITEMS,
  REMOVE_MULTI_ITEMS,
} from "./CartActionType";

const initialState = {
  numOfItems: 40,
  value: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEMS:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case REMOVE_ITEMS:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };

    case ADD_MULTI_ITEMS:
      console.log(typeof payload);
      console.log(typeof numOfItems);
      return {
        ...state,
        ...payload,
        numOfItems: parseInt(state.numOfItems) + parseInt(payload),
      };

    case REMOVE_MULTI_ITEMS:
      console.log(payload);
      return {
        ...state,
        ...payload,
        numOfItems: state.numOfItems - payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
