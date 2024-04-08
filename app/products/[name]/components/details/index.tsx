"use client";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Product } from "@/app/schemas";
import { useGlobalContext } from "@/app/context/store";
import Link from "next/link";
import NextImage from "@/app/components/image";

interface Props {
  data: Product;
}

export default function Details({ data }: Props) {
  const { addToCart } = useGlobalContext();
  const [activeSize, setActiveSize] = useState(data.sizes[0]);
  const [activeTab, setActiveTab] = useState("Description");
  const [activeImage, setActiveImage] = useState(data.images[0]);
  const [quantity, setQuantity] = useState(1);
  const tabs = ["Description", "Specification", "Reviews"];

  const StarRating = (rating: number) => {
    const roundedRating = Math.round(rating);
    const stars = [];

    for (let i = 0; i < roundedRating; i++) {
      stars.push(<FaStar key={`filled_${i}`} />);
    }

    for (let i = roundedRating; i < 5; i++) {
      stars.push(<FaRegStar key={`empty_${i}`} />);
    }

    return <div className="flex mb-4 text-3xl text-orange-600">{stars}</div>;
  };

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap items-start justify-start gap-4 my-24 mx-10">
        <div className="md:flex md:flex-row-reverse justify-end md:w-1/2">
          {/* Main Image Container */}
          <div className="relative flex flex-col items-center my-4 md:my-0 md:mx-4 bg-gray-100 aspect-square justify-center w-full h-full">
            <div className="relative w-4/5 h-full">
              <NextImage src={activeImage} className="object-contain" />
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="flex flex-row md:flex-col justify-between gap-2 overflow-x-auto">
            {data.images.map((src, index) => (
              <button className="border border-gray-200 p-4" key={index}>
                <NextImage src={src} width={100} />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 p-6">
          <div className="text-left">
            <p className="mb-2">Brand: {data.brand}</p>
            <p className="mb-2">Model: {data.model}</p>
            <p className="mb-2">Availability: Only {data.stock} in Stock</p>

            <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
            {StarRating(data.rating)}

            <ul className="list-disc ml-5 mb-4">
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className="border-t border-gray-200">
              <div className="flex flex-wrap py-4">
                {data.sizes.map((size, index) => (
                  <button
                    className={`py-1 px-1 sm:py-4 sm:px-10 rounded focus:outline-none ${
                      activeSize === size
                        ? "bg-transparent border-2 text-orange-600 border-orange-600"
                        : "bg-transparent hover:bg-gray-100"
                    }`}
                    key={index}
                    onClick={() => setActiveSize(size)}
                  >
                    {`${size} cm (${Math.round(size / 2.54)})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col border-t border-gray-200 pt-4">
              <span className="text-sm font-light">USD(incl. of all taxes)</span>
              <div className="flex flex-col md:flex-row justify-between items-center my-2">
                <div className="text-center md:text-left">
                  <span className="text-xl md:text-3xl font-bold text-red-600 pr-4">
                    ${data.price.current_price}
                  </span>
                  <span className="text-lg md:text-xl line-through text-gray-400">
                    ${data.price.original_price}
                  </span>
                </div>
                <div className="flex items-center border border-gray-300 text-xl md:text-3xl mt-4 md:mt-0">
                  <button
                    className="px-2 md:px-4 py-1 md:py-2 border-r border-gray-300 text-gray-600"
                    onClick={() =>
                      setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
                    }
                  >
                    -
                  </button>
                  <input
                    className="w-8 md:w-10 text-center"
                    type="text"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="px-2 md:px-4 py-1 md:py-2 border-l border-gray-300 text-gray-600"
                    onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                <Link
                  className="bg-red-500 text-white py-2 md:py-4 px-8 md:px-16 mb-4 md:mb-0"
                  href={"/checkouts/success"}
                >
                  Buy Now
                </Link>
                <button
                  className="border border-red-500 text-red-500 py-2 md:py-4 px-8 md:px-16"
                  onClick={() => addToCart({ product: data, quantity: quantity })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Details */}
      <div className="flex justify-center border-b">
        <ul className="flex cursor-pointer justify-between md:w-1/2 px-6">
          {tabs.map((text) => (
            <li key={text} className="mr-6">
              <p
                className={`hover:text-red-500 pb-0.5 text-xl ${
                  activeTab === text ? "border-red-500" : "border-transparent"
                } border-b-2`}
                onClick={() => setActiveTab(text)}
              >
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 flex justify-center text-start ">
        {activeTab === "Description" && (
          <div className="md:w-1/2">
            {`The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested.
            Although all OLEDs deliver similar fantastic picture quality, this one stands out for
            its value because it has many gaming oriented features that are great for gamers. *Only
            65G2 is shown in the image for example purposes. All 2022 LG OLED models feature
            eco-friendly packaging. **65C2 Stand model is at a minimum 39% lighter than the C1
            series.`}
          </div>
        )}
        {activeTab === "Specification" && (
          <div className="md:w-1/2">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, metus eu rhoncus
            efficitur, turpis sem tempus massa, id consectetur nunc purus in lectus. Donec non velit
            a odio volutpat volutpat in in nisi. Maecenas aliquet turpis lacus, id pharetra elit
            sagittis vel. Ut consectetur nisi quis ullamcorper pellentesque. Integer efficitur
            interdum nunc, ut elementum nulla. Phasellus feugiat nulla et rhoncus porttitor. Nullam
            at lectus sed turpis porttitor viverra accumsan hendrerit lorem. Praesent tincidunt nisi
            at nunc suscipit malesuada.`}
          </div>
        )}
        {activeTab === "Reviews" && (
          <div className="md:w-1/2">
            {`Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam tincidunt eget. Nulla
            a mi non nulla fermentum molestie. Aenean magna massa, tempus quis risus nec,
            sollicitudin consectetur mi. Donec dictum nulla sed nulla semper elementum. Nulla dictum
            ultrices risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque.
            Aenean a lacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat tellus
            elementum.`}
          </div>
        )}
      </div>
    </>
  );
}
