import Image from "next/image";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-50 py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-wrap mr-10 mb-4 sm:mb-0">
            <h2 className="text-4xl font-bold">antic</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 text-sm mb-4 sm:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul>
                <li className="mb-2">Furniture</li>
                <li className="mb-2">Decoration</li>
                <li className="mb-2">Storage</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Rooms</h3>
              <ul>
                <li className="mb-2">Living room</li>
                <li className="mb-2">Dining room</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul>
                <li className="mb-2">Click and collect</li>
                <li className="mb-2">Conception</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul>
                <li className="mb-2">Our story</li>
                <li className="mb-2">Our partners</li>
              </ul>
            </div>

            {/* We respect our planet Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">We respect our planet</h3>
              <div className="mb-2">
                <Image src="/footer-image.jpeg" width={150} height={150} alt="Not Found" />
              </div>
              <p className="mb-2">
                {`We're taking positive steps to reduce our impact on the planet. For us, that means
                retailing responsibly.`}
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Learn more &gt;
              </a>
            </div>
          </div>
        </div>

        {/* Socials Section */}
        <div className="flex justify-center text-3xl space-x-4 my-4">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaLinkedin />
          <FaInstagramSquare />
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between pt-4 mt-4 border-t">
          <div className="text-sm text-gray-500 mb-4 sm:mb-0">&copy; 2021 Agence DnD</div>
          <div className="text-sm text-gray-500 space-x-4">
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
            <a href="#" className="hover:underline">
              Term of service
            </a>
            <a href="#" className="hover:underline">
              Language
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
