import Image from "next/image";
import { CiCircleChevDown, CiChat1, CiMenuBurger } from "react-icons/ci";
import Carousel from "./components/carousel";
import Footer from "./components/footer";

const items = [
  { image: "/carousel-1.jpeg" },
  { image: "/carousel-2.jpeg" },
  { image: "/carousel-3.jpeg" },
  { image: "/carousel-4.jpeg" },
  { image: "/carousel-5.jpeg" },
  { image: "/carousel-6.jpeg" },
  { image: "/carousel-7.jpeg" },
  { image: "/carousel-8.jpeg" },
  { image: "/carousel-10.jpeg" },
  { image: "/carousel-11.jpeg" },
  { image: "/carousel-12.jpeg" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* First Section */}
      <div className="relative bg-orange-50 overflow-hidden">
        <CiChat1
          className="hidden md:inline-flex absolute right-10 top-5 text-white z-10"
          size={24}
        />

        <div className="sm:hidden absolute left-10 top-5 text-white text-3xl z-10">antic</div>
        <CiMenuBurger className="sm:hidden absolute right-10 top-5 text-white z-10" size={24} />

        <nav className="flex justify-between items-center py-4 px-8 z-10 w-full sm:w-1/2">
          <div className="font-bold text-xl text-gray-800">antic</div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Products
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Rooms
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Inspirations
            </a>
          </div>
        </nav>

        <div className="text-start px-8 py-24 z-10 relative w-full sm:w-1/2">
          <span className="text-sm font-semibold uppercase text-orange-500">Home Design</span>
          <h1 className="font-bold text-6xl my-4 text-gray-800">
            Elegance for <br /> Interiors & Exteriors
          </h1>
          <p className="text-gray-500 text-lg">
            We provide everyone with modern, trendy, quality furniture
          </p>
          <CiCircleChevDown className="mx-auto text-orange-500 mt-8" size={32} />
        </div>

        <div className="absolute right-0 top-0 h-full w-full sm:w-1/2 z-0">
          <Image src="/background.jpeg" alt="Decorative" layout="fill" objectFit="cover" />
        </div>
      </div>

      {/* Second Section */}
      <div className="mb-12 flex flex-col md:flex-row bg-orange-50 p-6 md:p-24">
        <div className="md:pr-32 w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-semibold">We stay by your side to design your projects</h2>
          <a href="#" className="text-lg mt-4 inline-block">
            Find out more
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Advices</h3>
            <p>
              What if you took advantage of this rather special period to rethink your interior? You
              spend more time at home so you might as well feel good there.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Click and Collect</h3>
            <p>
              Adapted and contactless. Free from €200 of purchases in stores offering the service.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Conception Service</h3>
            <p>
              Personalized service with an expert advisor for your interior and exterior decoration
              or layout projects.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Installation Service</h3>
            <p>
              Our furniture packaged in flat packs are designed for easy assembly. But you can call
              on our partner.
            </p>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className="p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold">Be aware of the latest trends</h2>
            <p className="text-xl">Stay informed of new trends, but also of our various offers.</p>
            <a href="#" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
              Learn more
            </a>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-stretch">
            <input
              type="text"
              placeholder="email@address.com"
              className="p-2 text-lg border-2 border-gray-200 flex-grow"
            />
            <button className="bg-gray-800 text-white px-6 py-2 hover:bg-gray-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <Carousel items={items} className="hidden sm:block" />
      </div>

      <Footer />
    </div>
  );
}
