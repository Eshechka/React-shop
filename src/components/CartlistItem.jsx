import { useContext } from "react";
import { commonContext } from "../CommonContext";

export function CartlistItem({ orderItem = {} }) {
  const { removeCartlistItem, changeCatrlistItemQuantity } =
    useContext(commonContext);

  return (
    <li className="collection-item avatar cartlist__item">
      <img
        src={orderItem.displayAssets[0].url}
        alt={orderItem.displayName}
        className="circle cartlist__item-image"
      />
      <div className="cartlist__item-info">
        <span className="title cartlist__item-title">
          {orderItem.displayName}
        </span>
      </div>
      <button
        className="cartlist__item-quantity-changer"
        onClick={() =>
          changeCatrlistItemQuantity(orderItem.mainId, "decrement")
        }
      >
        -
      </button>
      <span className="cartlist__item-quantity">{orderItem.quantity}</span>
      <button
        className="cartlist__item-quantity-changer"
        onClick={() =>
          changeCatrlistItemQuantity(orderItem.mainId, "increment")
        }
      >
        +
      </button>
      <span className="cartlist__item-price">
        {orderItem.price.regularPrice * orderItem.quantity}
      </span>
      <button
        data-cart-item-remove="true"
        className="secondary-content cartlist__item-remove"
        onClick={() => removeCartlistItem(orderItem.mainId)}
      >
        <i className="material-icons">clear</i>
      </button>
    </li>
  );
}
