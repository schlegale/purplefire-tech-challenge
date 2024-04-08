export interface CartItem {
  product: Product;
  quantity: number;
}

export type Favorite = string;

export interface GlobalContextType {
  cart: CartItem[];
  favorites: Favorite[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
}

interface Price {
  current_price: number;
  original_price: number | null;
  currency: string;
}

export interface Product {
  id: string;
  title: string;
  name: string;
  brand: string;
  model: string;
  stock: number;
  rating: number;
  images: string[];
  price: Price;
  features: string[];
  sizes: number[];
  label: { title: string; color: string };
}
