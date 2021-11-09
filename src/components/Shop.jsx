import { API_KEY, API_URL } from "../config";
import React, { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { Goods } from "./Goods";
import { Cart } from "./Cart";

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        // setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.warn("error", error);
      });
  }, []);

  function clickBuyGood(good) {
    let isGoodInOrder = order.find(
      (goodItem) => goodItem.mainId === good.mainId
    );

    console.log(isGoodInOrder);
    if (isGoodInOrder) {
      isGoodInOrder.quantity = isGoodInOrder.quantity + 1;
      setOrder([
        ...order,
        // ...order.filter((goodItem) => goodItem.mainId !== good.mainId),
        // { ...isGoodInOrder, quantity: isGoodInOrder.quantity + 1 },
      ]);
    } else {
      setOrder([...order, { ...good, quantity: 1 }]);
    }
  }

  return (
    <main className="content">
      <div className="container">
        <Cart quantity={order.length} />
        {isLoading ? (
          <div className="content__preloader">
            <Preloader />
          </div>
        ) : (
          <Goods clickBuyGood={clickBuyGood} goods={goods} />
        )}
      </div>
    </main>
  );
}
