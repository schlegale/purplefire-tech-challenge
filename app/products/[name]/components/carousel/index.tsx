"use client";
import React, { useState, useEffect } from "react";
import { Carousel as Container } from "react-responsive-carousel";
import { CiShoppingCart } from "react-icons/ci";

interface Item {
  label: string;
  image: string;
  name: string;
}

interface Props {
  list: Item[];
}

export default function Carousel({ list }: Props) {
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

  const pages = list.reduce<Item[][]>((result, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerPage);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(item);

    return result;
  }, []);

  return (
    <Container showArrows={true}>
      {pages.map((page, index) => (
        <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4" key={index}>
          {page.map((item, itemIndex) => renderCard(item, itemIndex))}
        </div>
      ))}
    </Container>
  );
}

function renderCard(item: Item, index: number) {
  return (
    <div className="flex flex-col">
      <div key={index} className="bg-gray-100 p-6 flex flex-col gap-16 items-center">
        <div className="flex justify-between w-full">
          <div>{item.label}</div>
          <div></div>
        </div>

        <img src={item.image} alt={item.name} className="w-full" />

        <div className="flex items-center px-4 py-2 bg-white gap-4 text-gray-400 ">
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
    </div>
  );
}
