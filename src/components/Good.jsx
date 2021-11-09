export function Good({ good = {}, clickBuyGood = Function.prototype }) {
  return (
    <div id={good.mainId} className="row goods__item card good hoverable">
      <div
        className="card-image goods__item-image"
        style={{
          backgroundImage: `url(
                    ${good.displayAssets[0].background}
                  )`,
        }}
      >
        <img src={good.displayAssets[0].url} alt={good.displayName} />
        <span className="card-title">{good.displayName}</span>
      </div>
      <div className="card-content good__content">
        <p>{good.displayDescription}</p>
      </div>
      <div className="card-action good__action">
        <span className="good__price">{good.price.regularPrice} руб.</span>
        <button className="btn right" onClick={() => clickBuyGood(good)}>
          Купить
        </button>
      </div>
    </div>
  );
}
