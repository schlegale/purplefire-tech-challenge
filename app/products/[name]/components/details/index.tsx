"use client";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Details() {
  const [activeTab, setActiveTab] = useState("Description");
  const tabs = ["Description", "Specification", "Reviews"];

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap items-start justify-start gap-4 my-24 mx-10">
        <div className="md:flex md:flex-row-reverse justify-end md:w-1/2">
          {/* Main Image */}
          <div className="flex flex-col items-center my-4 md:my-0 md:mx-4 bg-gray-100 aspect-square justify-center">
            <div className="w-4/5 flex justify-center items-center">
              <img src="/tv-1.png" alt="Selected TV" className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="flex flex-row md:flex-col justify-between gap-2 overflow-x-auto">
            {["/tv-1.png", "/tv-2.png", "/tv-3.png", "/tv-4.png"].map((src, index) => (
              <button className="border border-gray-200 p-4" key={index}>
                <img src={src} alt={`TV Thumbnail ${index + 1}`} width="100" height="100" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 p-6">
          <div className="text-left">
            <p className="mb-2">Brand: LG </p>
            <p className="mb-2">Model: OLED42C2PSA</p>
            <p className="mb-2">Availability: Only 2 in Stock</p>

            <h2 className="text-3xl font-bold mb-4">
              LG C2 42 (106CM) 4K SMART OLED EVO TV | WEBOS | CINEMA HDR
            </h2>
            <span className="flex mb-4 text-3xl text-orange-600">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </span>

            <ul className="list-disc ml-5 mb-4">
              <li>a9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
              <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
              <li>Hands-free Voice Control, Always Ready</li>
              <li>Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode</li>
              <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
            </ul>

            <div className="border-t border-gray-200">
              <div className="flex flex-wrap py-4">
                {[
                  "106 cm (42)",
                  "121 cm (48)",
                  "139 cm (55)",
                  "164 cm (65)",
                  "196 cm (77)",
                  "210 cm (83)",
                ].map((e, index) => (
                  <button
                    className={`py-4 px-10 rounded focus:outline-none ${
                      index === 0
                        ? "bg-transparent border-2 text-orange-600 border-orange-600"
                        : "bg-transparent hover:bg-gray-100"
                    }`}
                    key={index}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col border-t border-gray-200 pt-4">
              <span className="text-sm font-light">USD(incl. of all taxes)</span>
              <div className="flex justify-between items-center my-2">
                <div>
                  <span className="text-3xl font-bold text-red-600 pr-4">$600.72</span>
                  <span className="text-xl line-through text-gray-400">$800.00</span>
                </div>
                <div className="flex items-center border border-gray-300 text-3xl">
                  <button className="px-4 py-2 border-r border-gray-300 text-gray-600">-</button>
                  <input className="w-10 text-center" type="text" value="1" readOnly />
                  <button className="px-4 py-2 border-l border-gray-300 text-gray-600">+</button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button className="bg-red-500 text-white py-4 px-16">Buy Now</button>
                <button className="border border-red-500 text-red-500 py-4 px-16">
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
            "The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested.
            Although all OLEDs deliver similar fantastic picture quality, this one stands out for
            its value because it has many gaming oriented features that are great for gamers. *Only
            65G2 is shown in the image for example purposes. All 2022 LG OLED models feature
            eco-friendly packaging. **65C2 Stand model is at a minimum 39% lighter than the C1
            series."
          </div>
        )}
        {activeTab === "Specification" && (
          <div className="md:w-1/2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, metus eu rhoncus
            efficitur, turpis sem tempus massa, id consectetur nunc purus in lectus. Donec non velit
            a odio volutpat volutpat in in nisi. Maecenas aliquet turpis lacus, id pharetra elit
            sagittis vel. Ut consectetur nisi quis ullamcorper pellentesque. Integer efficitur
            interdum nunc, ut elementum nulla. Phasellus feugiat nulla et rhoncus porttitor. Nullam
            at lectus sed turpis porttitor viverra accumsan hendrerit lorem. Praesent tincidunt nisi
            at nunc suscipit malesuada."
          </div>
        )}
        {activeTab === "Reviews" && (
          <div className="md:w-1/2">
            "Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam tincidunt eget. Nulla
            a mi non nulla fermentum molestie. Aenean magna massa, tempus quis risus nec,
            sollicitudin consectetur mi. Donec dictum nulla sed nulla semper elementum. Nulla dictum
            ultrices risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque.
            Aenean a lacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat tellus
            elementum."
          </div>
        )}
      </div>
    </>
  );
}
