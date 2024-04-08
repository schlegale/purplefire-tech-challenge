"use client";
import React, { useEffect } from "react";
import "./index.css";
import Card from "./card";
import { useGlobalContext } from "@/app/context/store";
import data from "@/data.json";

interface Props {
  onClose: () => void;
}

export default function Favorites({ onClose }: Props) {
  const { favorites, removeFromFavorites } = useGlobalContext();

  const favoritesData = data.products.filter((product) => favorites.includes(product.id));

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
          <p className="font-light">Favorites</p>
          <p onClick={onClose} className="font-bold cursor-pointer">
            Back
          </p>
        </div>

        {/* Products list (scrollable) */}
        <div className="flex-grow overflow-y-scroll">
          {favoritesData.map((item, index) => {
            return (
              <Card
                data={item}
                onRemove={() => {
                  removeFromFavorites(item.id);
                }}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
