import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import NextImage from "../image";
import Link from "next/link";

export default function Footer() {
  const links = {
    products: ["Furniture", "Decoration", "Storage", "Baby and child", "Connected home"],
    rooms: [
      "Living room",
      "Dining room",
      "Cooked",
      "Bedroom",
      "Bathroom",
      "Office",
      "Laundry",
      "Garage",
    ],
    services: ["Click and collect", "Conception", "Installation", "Advices", "Gift card"],
    about: ["Our story", "Our stores", "Our partners"],
  };

  return (
    <footer className="bg-orange-50 py-8 px-[10vw]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-wrap mr-10 mb-4 sm:mb-0">
            <h2 className="text-4xl font-bold text-amber-900 opacity-75">antic</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 text-sm mb-4 sm:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-900 opacity-75">Products</h3>
              <ul>
                {links.products.map((link, index) => (
                  <li className="mb-2" key={index}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-900 opacity-75">Rooms</h3>
              <ul>
                {links.rooms.map((link, index) => (
                  <li className="mb-2" key={index}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-900 opacity-75">Services</h3>
              <ul>
                {links.services.map((link, index) => (
                  <li className="mb-2" key={index}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-900 opacity-75">About</h3>
              <ul>
                {links.about.map((link, index) => (
                  <li className="mb-2" key={index}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* We respect our planet Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-900 opacity-75">
                We respect our planet
              </h3>
              <div className="mb-2 w-[250px] h-[150px] relative">
                <NextImage src="/footer-image.jpeg" className="object-cover" />
              </div>

              <p className="mb-2">
                {`We're taking positive steps to reduce our impact on the planet. For us, that means
                retailing responsibly.`}
              </p>
              <Link
                href="#"
                className="text-sm font-bold mt-6 inline-block text-amber-800 opacity-75"
              >
                Learn more &gt;
              </Link>
            </div>
          </div>
        </div>

        {/* Socials Section */}
        <div className="flex justify-center text-3xl space-x-4 my-4">
          <FaFacebookSquare className="text-amber-900 opacity-50" />
          <FaTwitterSquare className="text-amber-900 opacity-50" />
          <FaLinkedin className="text-amber-900 opacity-50" />
          <FaInstagramSquare className="text-amber-900 opacity-50" />
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between pt-4 mt-4 border-t">
          <div className="text-sm text-gray-500 mb-4 sm:mb-0">&copy; 2021 Agence DnD</div>
          <div className="text-sm text-gray-500 space-x-4">
            <Link href="#" className="hover:underline">
              Privacy policy
            </Link>
            <Link href="#" className="hover:underline">
              Term of service
            </Link>
            <Link href="#" className="hover:underline">
              Language
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
