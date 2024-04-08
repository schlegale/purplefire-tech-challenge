import { CartItem } from "../schemas";

export const addToCart = (cart: CartItem[], newItem: CartItem) => {
  const existingCartItemIndex = cart.findIndex(
    (cartItem) => cartItem.product.id === newItem.product.id
  );

  let updatedCart;

  if (existingCartItemIndex > -1) {
    updatedCart = cart.map((cartItem, index) =>
      index === existingCartItemIndex
        ? { ...cartItem, quantity: cartItem.quantity + newItem.quantity }
        : cartItem
    );
  } else {
    updatedCart = [...cart, newItem];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export const removeFromCart = (cart: CartItem[], productId: string) => {
  const updatedCart = cart.filter((cartItem) => cartItem.product.id !== productId);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export const addToFavorites = (favorites: string[], productId: string) => {
  const updatedFavorites = favorites.includes(productId) ? favorites : [...favorites, productId];

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  return updatedFavorites;
};

export const removeFromFavorites = (favorites: string[], productId: string) => {
  const updatedFavorites = favorites.filter((favoriteId) => favoriteId !== productId);

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  return updatedFavorites;
};
