"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { ReactNode } from "react";
import { addToCart, removeFromCart, addToFavorites, removeFromFavorites } from "./actions";
import { GlobalContextType, CartItem } from "../schemas";

type Props = {
  children: ReactNode;
};

const GlobalContext = createContext<GlobalContextType>({
  cart: [],
  favorites: [],
  addToCart: () => {},
  removeFromCart: () => {},
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }

    const favoritesData = localStorage.getItem("favorites");
    if (favoritesData) {
      setFavorites(JSON.parse(favoritesData));
    }
  }, []);

  const value = {
    cart,
    favorites,
    addToCart: (item: CartItem) => setCart((prev) => addToCart(prev, item)),
    removeFromCart: (productId: string) => setCart((prev) => removeFromCart(prev, productId)),
    addToFavorites: (productId: string) => setFavorites((prev) => addToFavorites(prev, productId)),
    removeFromFavorites: (productId: string) =>
      setFavorites((prev) => removeFromFavorites(prev, productId)),
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
