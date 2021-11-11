import { CartlistItem } from "./CartlistItem.jsx";

export function Cartlist(props) {
  const {
    orderList = [],
    removeCartlistItem = Function.prototype,
    changeCatritemQuantity = Function.prototype,
  } = props;

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
        <span data-cart-close="true" className="right">
          <i className="material-icons">clear</i>
        </span>
      </h4>

      <ul className="collection cartlist__list">
        {orderList.map((orderItem) => {
          return (
            <CartlistItem
              orderItem={orderItem}
              key={orderItem.mainId}
              removeCartlistItem={removeCartlistItem}
              changeCatritemQuantity={changeCatritemQuantity}
            />
          );
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
