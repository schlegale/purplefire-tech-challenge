"use client";
import { Carousel as Container } from "react-responsive-carousel";
import { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

interface Item {
  label?: string;
  image: string;
  name?: string;
}

interface Props {
  items: Item[];
  className: string;
}

export default function Carousel({ items, className }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pages = items.reduce<Item[][]>((result, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(item);

    return result;
  }, []);

  const goToNext = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={className}>
      <Container
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        {pages.map((page, index) => (
          <div key={index}>
            <div className="background-green w-full h-[50vh] grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
              {page.map((item: Item, itemIndex: number) => (
                <div key={itemIndex} className="product-item">
                  <img src={item.image} alt={"Not Found"} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 py-6 bg-white px-[10vw]">
        <h2 className="text-4xl font-semibold">Inspirations</h2>
        <p className="text-sm text-gray-500 w-1/2">
          Our experts are keen to stay on top of trends in order to offer you new inspirations for
          your interior and exterior every day. Remember that to inspire you we have to inspire
          ourselves and we want to share that with you.
        </p>
        <div className="flex items-center">
          <CiCircleChevLeft onClick={goToPrev} className="text-red-600 text-2xl" />
          <CiCircleChevRight onClick={goToNext} className="text-red-600 text-2xl ml-2" />
          <span className="text-base mx-2">
            {currentIndex + 1} / {pages.length}
          </span>
        </div>
      </div>
    </div>
  );
}
