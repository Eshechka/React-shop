export function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className="cart green darken-1">
      <i className="material-icons small white-text">shopping_cart</i>
      {quantity !== undefined ? (
        <span className="cart__quantity white-text">{quantity}</span>
      ) : null}
    </div>
  );
}
