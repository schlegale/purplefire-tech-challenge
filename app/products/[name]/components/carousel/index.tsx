"use client";
import React, { useState, useEffect } from "react";
import { Carousel as Container } from "react-responsive-carousel";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Product } from "@/app/schemas";
import { useGlobalContext } from "@/app/context/store";
import Link from "next/link";
import NextImage from "@/app/components/image";
import Notification from "@/app/components/notification";

interface Props {
  data: Product[];
}

type ColorClassKey = "red" | "yellow" | "violet" | "green";

export default function Carousel({ data }: Props) {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const pages = data.reduce<Product[][]>((result, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerPage);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(item);

    return result;
  }, []);

  return (
    <Container showArrows={true} showThumbs={false}>
      {pages.map((page, index) => (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4" key={index}>
          {page.map((item, itemIndex) => (
            <RenderCard item={item} index={itemIndex} key={itemIndex} />
          ))}
        </div>
      ))}
    </Container>
  );
}

function RenderCard({ item, index }: { item: Product; index: number }) {
  const { addToCart, addToFavorites, favorites, removeFromFavorites } = useGlobalContext();
  const [notification, setNotification] = useState("");

  const triggerNotification = (text: string) => {
    setNotification(text);
    setTimeout(() => setNotification(""), 3000);
  };

  const colorClasses = {
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    violet: "bg-violet-500",
    green: "bg-green-500",
  };

  const getColorClass = (color: string): string => {
    const validColors: { [key in ColorClassKey]?: true } = {
      red: true,
      yellow: true,
      violet: true,
      green: true,
    };

    return validColors[color as ColorClassKey] ? colorClasses[color as ColorClassKey] : "";
  };

  const isFavorite = favorites.includes(item.id);

  return (
    <div key={index}>
      <Link
        className="flex flex-col"
        href={`/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className="bg-gray-100 p-6 flex flex-col gap-16 items-center">
          <div className="flex justify-between w-full">
            <div
              className={`${getColorClass(
                item.label.color
              )} rounded-lg px-4 h-8 sm:h-10 py-2 text-white text-xs sm:text-base overflow-hidden overflow-ellipsis whitespace-nowrap`}
            >
              {item.label.title}
            </div>
            <div
              className="flex items-center justify-center h-10 w-10 sm:h-16 sm:w-16 rounded-full border border-gray-200 text-xl sm:text-3xl"
              // text-xs sm:text-sm
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (isFavorite) {
                  removeFromFavorites(item.id);
                } else {
                  addToFavorites(item.id);
                  triggerNotification(`${item.name} added to favorites!`);
                }
              }}
            >
              <FaHeart className={isFavorite ? "text-red-600" : "text-gray-400"} />
            </div>
          </div>

          <div className="relative w-full h-auto">
            <NextImage src={item.images[0]} height={300} />
          </div>
          <div
            className="flex items-center px-4 py-2 bg-white gap-4 text-gray-400 text-xs sm:text-sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart({ product: item, quantity: 1 });
              triggerNotification(`${item.name} added to cart!`);
            }}
          >
            <CiShoppingCart className="text-2xl font-bold" />
            <span>Add to cart</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <div className="text-xl">
            <span className="pr-4">$600.72</span>
            <span className="line-through text-gray-400">$800.00</span>
          </div>
        </div>
      </Link>

      {notification && <Notification text={notification} />}
    </div>
  );
}
