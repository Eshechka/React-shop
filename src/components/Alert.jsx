import React, { useEffect } from "react";

export function Alert(props) {
  const { name, clearNameOfAlert = Function.prototype } = props;

  useEffect(() => {
    const timerAlert = setTimeout(() => {
      clearNameOfAlert();
    }, 2000);
    return () => {
      clearTimeout(timerAlert);
    };
  }, [name]);

  return <a class="alert btn">{name} добавлен в корзину</a>;
}
