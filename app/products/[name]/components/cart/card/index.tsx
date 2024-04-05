import Image from "next/image";
import { CartItem } from "@/app/schemas";

interface Props {
  data: CartItem;
  onRemove: () => void;
}

export default function Card({ data, onRemove }: Props) {
  const { name, price, quantity, imageUrl } = data;

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded">
      <Image src={imageUrl} alt={name} width={100} height={100} objectFit="cover" />

      <div className="flex flex-col justify-between flex-grow px-4 text-start">
        <span className="font-semibold">{name}</span>
        <span className="text-sm text-gray-600">Qty: {quantity}</span>
      </div>

      <div className="flex flex-col text-right">
        <span className="font-semibold">${price}</span>
        <button onClick={onRemove} className="text-sm text-blue-500 hover:text-blue-700">
          Remove
        </button>
      </div>
    </div>
  );
}
