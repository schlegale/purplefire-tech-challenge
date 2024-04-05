import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-10 text-start">
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-5 gap-8">
        {/* About us */}
        <div>
          <h5 className="text-lg font-bold mb-4">ABOUT US</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut
            laoreet. Quisque ultricies et tortor nec laoreet.
          </p>
          <div className="flex mt-4">
            <Link href="/" className="mr-4">
              <FaFacebookF />
            </Link>
            <Link href="/" className="mr-4">
              <FaWhatsapp />
            </Link>
            <Link href="/" className="mr-4">
              <FaInstagram />
            </Link>
            <Link href="/" className="mr-4">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Information */}
        <div>
          <h5 className="text-lg font-bold mb-4">INFORMATION</h5>
          <Link href="/about">
            <div className="block mt-2">About</div>
          </Link>
        </div>

        {/* Account */}
        <div>
          <h5 className="text-lg font-bold mb-4">ACCOUNT</h5>
          <Link href="/my-account">
            <div className="block mt-2">My Account</div>
          </Link>
        </div>

        {/* Store */}
        <div>
          <h5 className="text-lg font-bold mb-4">STORE</h5>
          <Link href="/affiliate">
            <div className="block mt-2">Affiliate</div>
          </Link>
        </div>

        {/* Contact us */}
        <div>
          <h5 className="text-lg font-bold mb-4">CONTACT US</h5>
          <p>
            If you have any query, please contact us at{" "}
            <Link href="mailto:needus24@gmail.com" className="text-blue-300">
              needus24@gmail.com
            </Link>
          </p>
          <p className="mt-4">California, USA</p>
          <p className="mt-2">+12012987481</p>
        </div>
      </div>

      {/* For the mobile */}
      <div className="p-4 md:hidden">
        <ul>
          {["ABOUT US", "INFORMATION", "ACCOUNT", "STORE", "CONTACT US"].map((link, index) => (
            <li className="mb-4">
              <Link href="/about-us" className="block text-left" key={index}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 text-center py-4 mt-8">
        <p>Copyright © 2023 All Right Reserved</p>
      </div>
    </footer>
  );
}
