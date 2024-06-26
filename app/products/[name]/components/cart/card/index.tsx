import { CartItem } from "@/app/schemas";
import NextImage from "@/app/components/image";

interface Props {
  data: CartItem;
  onRemove: () => void;
}

export default function Card({ data, onRemove }: Props) {
  const { product, quantity } = data;

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded">
      <NextImage src={product.images[0]} width={100} />

      <div className="flex flex-col justify-between flex-grow px-4 text-start">
        <span className="font-semibold">{product.name}</span>
        <span className="text-sm text-gray-600">Qty: {quantity}</span>
      </div>

      <div className="flex flex-col text-right">
        <span className="font-semibold">${product.price.current_price}</span>
        <button onClick={onRemove} className="text-sm text-blue-500 hover:text-blue-700">
          Remove
        </button>
      </div>
    </div>
  );
}
