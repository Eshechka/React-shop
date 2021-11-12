import { API_KEY, API_URL } from "../config";
import React, { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { Goods } from "./Goods";
import { Cart } from "./Cart";
import { Alert } from "./Alert";

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [isShowCartList, setIsShowCartList] = useState(false);
  const [alertName, setAlertName] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 2000);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.warn("error", error);
      });
  }, []);

  useEffect(() => {
    if (!order.length) {
      setIsShowCartList(false);
    }
  }, [order]);

  function clickBuyGood(good) {
    let isGoodInOrder = order.find(
      (goodItem) => goodItem.mainId === good.mainId
    );

    if (isGoodInOrder) {
      isGoodInOrder.quantity = isGoodInOrder.quantity + 1;
      setOrder([...order]);
    } else {
      setOrder([...order, { ...good, quantity: 1 }]);
    }
    good.displayName && setAlertName(good.displayName);
  }

  function toggleShowCart(event) {
    if (!isShowCartList) {
      if (order.length) {
        setIsShowCartList(true);
      }
    } else {
      const targetElement = event.target;
      const isCloseClicked = !!(
        targetElement.dataset.cartClose ||
        targetElement.closest('[data-cart-close="true"]')
      );
      if (isCloseClicked) {
        setIsShowCartList(false);
      }
    }
  }

  function removeCartlistItem(idCartlistItem) {
    const newOrder = order.filter(
      (orderItem) => orderItem.mainId !== idCartlistItem
    );
    setOrder([...newOrder]);
  }

  function changeCatritemQuantity(idCattlistChangedItem, whatcrement) {
    const changedOrder = order.find(
      (orderItem) => orderItem.mainId === idCattlistChangedItem
    );
    if (changedOrder.mainId) {
      if (whatcrement === "increment") {
        changedOrder.quantity = changedOrder.quantity + 1;
      } else if (whatcrement === "decrement") {
        changedOrder.quantity = Math.max(changedOrder.quantity - 1, 1);
      }
    }
    setOrder([...order]);
  }

  function clearNameOfAlert() {
    setAlertName("");
  }

  return (
    <main className="content">
      <div className="container">
        <Cart
          quantity={order.length}
          orderList={order}
          isShowCartList={isShowCartList}
          toggleShowCart={toggleShowCart}
          removeCartlistItem={removeCartlistItem}
          changeCatritemQuantity={changeCatritemQuantity}
        />
        {alertName && (
          <Alert name={alertName} clearNameOfAlert={clearNameOfAlert} />
        )}
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
