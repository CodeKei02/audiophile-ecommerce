import { createContext, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";

//1:Creando el contexto. Este es el que tenemos que consumir
export const CartContext = createContext();

const initialState = {
  items: [],
  totalPrice: 0,
};

const init = (initialArg) => {
  return JSON.parse(localStorage.getItem("cart")) || initialArg;
}
//2: Crear el provider para proveer el contexto (Enviarlo a App.jsx. Y este es el que nos provee el acceso
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState, init);

  return (
    <CartContext.Provider
      value={{ cart, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};
