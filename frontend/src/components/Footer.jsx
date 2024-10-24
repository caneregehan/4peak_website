import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 py-8 text-gray-300 bg-gray-800">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-xl font-bold text-white">
            <img
              src="./src/assets/4PEAK_BEYAZ.png"
              className="h-auto w-36"
              alt="4PEAK LOGO"
            />
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex mb-4 space-x-8 md:mb-0">
          <a
            href="https://facebook.com"
            className="text-gray-300 hover:text-white">
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-300 hover:text-white">
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-300 hover:text-white">
            <FaInstagram />
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-right">
          <p className="mb-2">Phone: +90 123 456 7890</p>
          <p>Address: 123 Street, Istanbul, Turkey</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; 2024 4Peak. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
