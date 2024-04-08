"use client";
import { useEffect, useMemo } from "react";
import "./index.css";
import Card from "./card";
import { useGlobalContext } from "@/app/context/store";

interface Props {
  onClose: () => void;
}

export default function Cart({ onClose }: Props) {
  const { cart, removeFromCart } = useGlobalContext();

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.product.price.current_price * item.quantity,
      0
    );
  }, [cart]);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-end z-50"
      onClick={() => onClose()}
    >
      <div
        className="animate-slide-in fixed right-0 top-0 h-full w-full md:w-1/3 bg-white p-6 flex flex-col z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-4">
          <p className="font-light">Shopping Cart</p>
          <p onClick={onClose} className="font-bold cursor-pointer">
            Back
          </p>
        </div>

        {/* Products list (scrollable) */}
        <div className="flex-grow overflow-y-scroll">
          {cart.map((item, index) => {
            return (
              <Card data={item} onRemove={() => removeFromCart(item.product.id)} key={index} />
            );
          })}
        </div>

        {/* Checkout Section */}
        <div className="flex justify-between mt-4 mb-2">
          <p className="text-gray-800">Subtotal:</p>
          <p className="text-gray-800">${subtotal.toFixed(2)}</p>
        </div>

        <div className="flex justify-between mb-4">
          <p className="text-gray-800">Shipping:</p>
          <p className="text-gray-800">$0</p>
        </div>
        <button className="w-full py-2 bg-black text-white rounded-md" onClick={() => {}}>
          Checkout
        </button>
      </div>
    </div>
  );
}
