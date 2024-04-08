import { CiCircleChevDown, CiChat1, CiMenuBurger } from "react-icons/ci";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import NextImage from "./components/image";
import Link from "next/link";
import ButtonMenu from "./components/menu";
import Subscribe from "./components/subscribe";

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
    <div className="flex flex-col min-h-screen bg-orange-50">
      {/* First Section */}
      <div className="relative px-[10vw] overflow-hidden  min-h-screen">
        <div className="sm:hidden absolute left-10 top-5 text-white text-3xl z-10">antic</div>

        {/* Icons */}
        <ButtonMenu />
        <div className="flex justify-center items-center rounded-full border border-white p-2 absolute right-10 top-5 z-10 hidden md:inline-flex">
          <CiChat1 className="text-white" size={24} />
        </div>

        <nav className="flex justify-between items-center py-4 px-8 z-10 w-full sm:w-1/2">
          <div className="font-medium text-3xl text-amber-800">antic</div>
          <div className="flex items-center space-x-4">
            <Link href="/products/lg-evo" className="text-gray-600 hover:text-gray-800">
              Products
            </Link>
            <Link href="/products/lg-evo" className="text-gray-600 hover:text-gray-800">
              Rooms
            </Link>
            <Link href="/products/lg-evo" className="text-gray-600 hover:text-gray-800">
              Services
            </Link>
            <Link href="/products/lg-evo" className="text-gray-600 hover:text-gray-800">
              Inspirations
            </Link>
          </div>
        </nav>

        <div className="text-center sm:text-start py-24 relative w-full sm:w-1/2 text-white sm:text-amber-800 space-y-12 z-10">
          <span className="text-sm">HOME DESIGN</span>
          <h1 className="text-6xl my-4">
            Elegance for <br /> Interiors & Exteriors
          </h1>
          <p className="sm:text-gray-600 text-lg">
            We provide everyone with modern, <br /> trendy, quality furniture
          </p>
          <Link href="#section2">
            <CiCircleChevDown
              className="mx-auto sm:mx-0 mt-8 text-white sm:text-amber-800"
              size={50}
            />
          </Link>
        </div>

        <div className="absolute right-0 top-0 h-full w-full sm:w-1/2 z-0">
          <NextImage src="/background.jpeg" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Second Section */}
      <div id="section2" className="mb-12 flex flex-col md:flex-row bg-orange-50 p-6 md:p-24">
        <div className="md:pr-32 w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-6xl text-gray-600">We stay by your side to design your projects</h2>
          <Link
            href="/products/lg-evo"
            className="text-sm font-bold mt-6 inline-block text-amber-800"
          >
            {"Find out more >"}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2 text-gray-600">
          <div>
            <h3 className="text-3xl mb-2 text-amber-800">Our Advices</h3>
            <p>
              What if you took advantage of this rather special period to rethink your interior? You
              spend more time at home so you might as well feel good there.
            </p>
          </div>
          <div>
            <h3 className="text-3xl mb-2 text-amber-800">Click and Collect</h3>
            <p>
              Adapted and contactless. Free from €200 of purchases in stores offering the service.
            </p>
          </div>
          <div>
            <h3 className="text-3xl mb-2 text-amber-800">Conception Service</h3>
            <p>
              Personalized service with an expert advisor for your interior and exterior decoration
              or layout projects.
            </p>
          </div>
          <div>
            <h3 className="text-3xl mb-2 text-amber-800">Installation Service</h3>
            <p>
              Our furniture packaged in flat packs are designed for easy assembly. But you can call
              on our partner.
            </p>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className="p-8 bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-center px-[10vw]">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold">Be aware of the latest trends</h2>
            <p className="text-xl">Stay informed of new trends, but also of our various offers.</p>
            <Link
              href="/latest-trends"
              className="text-sm font-bold mt-6 inline-block text-amber-800"
            >
              {"Learn more >"}
            </Link>
          </div>
          <Subscribe />
        </div>

        <Carousel items={items} className="hidden sm:block" />
      </div>

      <Footer />
    </div>
  );
}
