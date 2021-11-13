export function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_CARTLIST_ITEM":
      const findGoodInCartlist = state.order.find(
        (item) => item.mainId === payload.good.mainId
      );
      let newOrderAfterAdd = [];

      if (findGoodInCartlist) {
        newOrderAfterAdd = [
          ...state.order.filter((item) => item !== findGoodInCartlist),
          { ...payload.good, quantity: findGoodInCartlist.quantity + 1 },
        ];
      } else {
        newOrderAfterAdd = [...state.order, { ...payload.good, quantity: 1 }];
      }

      if (payload.good.displayName) {
        state.alertName = payload.good.displayName;
      }
      return { ...state, order: newOrderAfterAdd };
    case "TOGGLE_SHOW_CART":
      let newShowCartlist = state.isShowCartList;
      if (!state.isShowCartList) {
        if (state.order.length) {
          newShowCartlist = true;
        }
      } else if (!payload.event) {
        newShowCartlist = false;
      } else {
        const targetElement = payload.event.target;
        const isCloseClicked = !!(
          targetElement.dataset.cartClose ||
          targetElement.closest('[data-cart-close="true"]') ||
          (targetElement.closest('[data-cart="true"]') &&
            !targetElement.closest('[data-cartlist="true"]'))
        );

        if (isCloseClicked) {
          newShowCartlist = false;
        }
      }
      return { ...state, isShowCartList: newShowCartlist };
    case "REMOVE_CARTLIST_ITEM":
      const newOrderAfterRemove = state.order.filter(
        (orderItem) => orderItem.mainId !== payload.id
      );
      return { ...state, order: newOrderAfterRemove };
    case "CHANGE_CARTLIST_ITEM_QUANTITY":
      const changedOrder = state.order.find(
        (item) => item.mainId === payload.id
      );
      let newOrderAfterChanged = [];

      if (changedOrder) {
        if (payload.whatcrement === "increment") {
          newOrderAfterChanged = [
            ...state.order.map((item) => {
              if (item === changedOrder) {
                return { ...item, quantity: changedOrder.quantity + 1 };
              }
              return item;
            }),
          ];
        } else if (payload.whatcrement === "decrement") {
          newOrderAfterChanged = [
            ...state.order.map((item) => {
              if (item === changedOrder) {
                return {
                  ...item,
                  quantity: Math.max(changedOrder.quantity - 1, 1),
                };
              }
              return item;
            }),
          ];
        }
      }
      return { ...state, order: newOrderAfterChanged };
    case "CLEAR_NAME_OF_ALERT":
      return { ...state, alertName: "" };
    case "GET_GOODS":
      return { ...state, goods: payload.data, isLoading: false };
    default:
      return state;
  }
}
