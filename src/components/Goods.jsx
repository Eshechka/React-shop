import { Good } from "./Good";

export function Goods({ goods = [], clickBuyGood = Function.prototype }) {
  if (!goods.length) {
    return <div className="goods__list">Empty goods list...</div>;
  }
  return (
    <div className="goods">
      <div className="goods__list">
        {goods.map((good) => {
          return (
            <Good key={good.mainId} good={good} clickBuyGood={clickBuyGood} />
          );
        })}
      </div>
    </div>
  );
}
