export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface Item {
  label?: string;
  image: string;
  name?: string;
}
