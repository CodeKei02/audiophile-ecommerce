import { useCart } from "./useCart";

export const useCounter = () => {
  const { dispatch } = useCart();

  const increaseItem = (id, quantity = 1) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: {
        id,
        quantity,
      },
    });
  };

  const decreaseItem = (id, quantity = 1) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: {
        id,
        quantity,
      },
    });
  };

  return {
    increaseItem,
    decreaseItem
  }
};
