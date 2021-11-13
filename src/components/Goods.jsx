import { Good } from "./Good";

import { useContext } from "react";
import { commonContext } from "../CommonContext";

export function Goods() {
  const { goods } = useContext(commonContext);
  if (!goods.length) {
    return <div className="goods__list">Empty goods list...</div>;
  }
  return (
    <div className="goods">
      <div className="goods__list">
        {goods.map((good) => {
          return <Good key={good.mainId} good={good} />;
        })}
      </div>
    </div>
  );
}
