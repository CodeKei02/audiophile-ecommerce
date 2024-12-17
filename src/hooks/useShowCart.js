import { useState } from "react";

export const useShowCart = (initialValue) => {
  const [showCart, setShowCart] = useState(initialValue);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return {
    showCart,
    handleShowCart,
  };
};
