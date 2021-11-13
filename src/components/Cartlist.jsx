import { CartlistItem } from "./CartlistItem.jsx";

import { useContext } from "react";
import { commonContext } from "../CommonContext";

export function Cartlist() {
  const orderList = useContext(commonContext).order || [];

  function getTotalCartPrice() {
    return orderList.reduce(
      (sum, current) => sum + current.price.regularPrice * current.quantity,
      0
    );
  }

  return (
    <div className="cartlist">
      <h4 className="cartlist__title">
        Cart List
        <span
          data-cart-close="true"
          className="cartlist__close right hoverable"
        >
          <i className="material-icons">clear</i>
        </span>
      </h4>

      <ul className="collection cartlist__list">
        {orderList.map((orderItem) => {
          return <CartlistItem orderItem={orderItem} key={orderItem.mainId} />;
        })}
      </ul>

      <div className="cartlist__total">
        Total
        <span className="cartlist__total-quantity right">
          {getTotalCartPrice()}
        </span>
      </div>
    </div>
  );
}
