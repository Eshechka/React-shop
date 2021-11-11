import { Cartlist } from "./Cartlist.jsx";

export function Cart(props) {
  const {
    quantity = 0,
    isShowCartList = false,
    orderList = [],
    toggleShowCart = Function.prototype,
    removeCartlistItem = Function.prototype,
    changeCatritemQuantity = Function.prototype,
  } = props;
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
      <div className="cart__cartlist">
        {isShowCartList ? (
          <Cartlist
            orderList={orderList}
            removeCartlistItem={removeCartlistItem}
            changeCatritemQuantity={changeCatritemQuantity}
          />
        ) : null}
      </div>
    </div>
  );
}
