import { Product } from "@/app/schemas";
import NextImage from "@/app/components/image";

interface Props {
  data: Product;
  onRemove: () => void;
}

export default function Card({ data, onRemove }: Props) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded">
      <NextImage src={data.images[0]} width={100} />

      <div className="flex flex-col justify-between flex-grow px-4 text-start">
        <span className="font-semibold">{data.name}</span>
      </div>

      <div className="flex flex-col text-right">
        <button onClick={onRemove} className="text-sm text-blue-500 hover:text-blue-700">
          Remove
        </button>
      </div>
    </div>
  );
}
