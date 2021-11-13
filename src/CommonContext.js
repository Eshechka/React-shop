import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const commonContext = createContext();

const initialState = {
  goods: [],
  isLoading: true,
  order: [],
  isShowCartList: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addCartlistItem = (good) => {
    dispatch({ type: "ADD_CARTLIST_ITEM", payload: { good: good } });
  };
  value.toggleShowCart = (event) => {
    dispatch({ type: "TOGGLE_SHOW_CART", payload: { event: event } });
  };
  value.removeCartlistItem = (idCartlistItem) => {
    dispatch({
      type: "REMOVE_CARTLIST_ITEM",
      payload: { id: idCartlistItem },
    });
  };
  value.changeCatrlistItemQuantity = (idCartlistChangedItem, whatcrement) => {
    dispatch({
      type: "CHANGE_CARTLIST_ITEM_QUANTITY",
      payload: { id: idCartlistChangedItem, whatcrement: whatcrement },
    });
  };
  value.clearNameOfAlert = () => {
    dispatch({ type: "CLEAR_NAME_OF_ALERT" });
  };
  value.getGoods = (data) => {
    dispatch({ type: "GET_GOODS", payload: { data: data } });
  };

  return (
    <commonContext.Provider value={value}>{children}</commonContext.Provider>
  );
};
