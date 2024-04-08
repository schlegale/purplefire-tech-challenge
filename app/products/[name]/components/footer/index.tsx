import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { CiLocationOn, CiMobile1 } from "react-icons/ci";

export default function Footer() {
  const links = {
    information: [
      "About",
      "Delivery information",
      "Privacy Policy",
      "Sales",
      "Terms & Conditions",
      "EMI Payment",
    ],
    account: ["My Account", "My Orders", "Returns", "Shipping", "Wishlist", "Account Details"],
    store: ["Affiliate", "Discounts", "Sale", "Contact", "All Collections"],
  };
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
          {links.information.map((link, index) => (
            <Link
              className="block mt-2"
              key={index}
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Account */}
        <div>
          <h5 className="text-lg font-bold mb-4">ACCOUNT</h5>
          {links.account.map((link, index) => (
            <Link
              className="block mt-2"
              key={index}
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Store */}
        <div>
          <h5 className="text-lg font-bold mb-4">STORE</h5>
          {links.store.map((link, index) => (
            <Link
              className="block mt-2"
              key={index}
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Contact us */}
        <div>
          <h5 className="text-lg font-bold mb-4">CONTACT US</h5>
          <p>
            If you have any query, please contact us at{" "}
            <Link href="mailto:needus24@gmail.com" className="text-red-600">
              needus24@gmail.com
            </Link>
          </p>
          <p className="mt-4 flex items-center">
            <CiLocationOn className="mr-2 text-xl" />
            California, USA
          </p>
          <p className="mt-4 flex items-center">
            <CiMobile1 className="mr-2 text-xl" />
            +12012987481
          </p>
        </div>
      </div>

      {/* For the mobile */}
      <div className="p-4 md:hidden">
        <ul>
          {["ABOUT US", "INFORMATION", "ACCOUNT", "STORE", "CONTACT US"].map((link, index) => (
            <li className="mb-4" key={index}>
              <Link href="/about-us" className="block text-left">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 text-center py-10 mt-8">
        <p>Copyright © 2023 All Right Reserved</p>
      </div>
    </footer>
  );
}
