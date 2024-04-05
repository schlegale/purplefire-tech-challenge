"use client";
import React, { useEffect } from "react";
import "./index.css";
import Card from "./card";
import { CartItem } from "@/app/schemas";

interface Props {
  onClose: () => void;
}

const cart: CartItem[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    quantity: 1,
    imageUrl: "/carousel-1.jpeg",
  },
  {
    id: 2,
    name: "Ergonomic Wireless Mouse",
    price: 29.99,
    quantity: 2,
    imageUrl: "/carousel-2.jpeg",
  },
  {
    id: 3,
    name: "HD Webcam",
    price: 49.99,
    quantity: 1,
    imageUrl: "/carousel-3.jpeg",
  },
];

export default function Cart({ onClose }: Props) {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-end"
      onClick={() => onClose()}
    >
      <div
        className="animate-slide-in fixed right-0 top-0 h-full w-full md:w-1/3 bg-white p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-4">
          <p className="font-light">Shopping Cart</p>
          <p onClick={onClose} className="font-bold">
            Back
          </p>
        </div>

        {/* Products list (scrollable) */}
        <div className="flex-grow overflow-y-scroll">
          {cart.map((item, index) => {
            return <Card data={item} onRemove={() => {}} key={index} />;
          })}
        </div>

        {/* Checkout Section */}
        <div className="flex justify-between mt-4 mb-2">
          <p className="text-gray-800">Subtotal:</p>
          <p className="text-gray-800">$123</p>
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
