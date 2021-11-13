import { Cartlist } from "./Cartlist.jsx";

import { useContext } from "react";
import { commonContext } from "../CommonContext";

export function Cart() {
  const quantity = useContext(commonContext).order.length || 0;
  const { isShowCartList = false, toggleShowCart = Function.prototype } =
    useContext(commonContext);
  return (
    <div
      data-cart="true"
      className="cart green darken-1"
      onClick={(event) => toggleShowCart(event)}
    >
      <i className="material-icons small white-text">shopping_cart</i>
      {quantity !== undefined ? (
        <span className="cart__quantity white-text">{quantity}</span>
      ) : null}
      <div data-cartlist="true" className="cart__cartlist">
        {isShowCartList ? <Cartlist /> : null}
      </div>
    </div>
  );
}
