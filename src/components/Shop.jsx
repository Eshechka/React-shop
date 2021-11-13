import { API_KEY, API_URL } from "../config";
import React, { useEffect, useContext } from "react";
import { Preloader } from "./Preloader";
import { Goods } from "./Goods";
import { Cart } from "./Cart";
import { Alert } from "./Alert";

import { commonContext } from "../CommonContext";

export function Shop() {
  let { isLoading, order, toggleShowCart, alertName, getGoods } =
    useContext(commonContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.shop) {
          getGoods(data.shop);
        }
      })
      .catch((error) => {
        console.warn("error", error);
      });
  }, []);

  useEffect(() => {
    if (!order.length) {
      toggleShowCart();
    }
  }, [order]);

  return (
    <main className="content">
      <div className="container">
        <Cart />
        {alertName && <Alert />}
        {isLoading ? (
          <div className="content__preloader">
            <Preloader />
          </div>
        ) : (
          <Goods />
        )}
      </div>
    </main>
  );
}
