import React, { useEffect } from "react";

import { useContext } from "react";
import { commonContext } from "../CommonContext";

export function Alert() {
  const { alertName = "", clearNameOfAlert = Function.prototype } =
    useContext(commonContext);

  useEffect(() => {
    const timerAlert = setTimeout(() => {
      clearNameOfAlert();
    }, 2000);
    return () => {
      clearTimeout(timerAlert);
    };
  }, [alertName]);

  return <a className="alert btn">{alertName} добавлен в корзину</a>;
}
