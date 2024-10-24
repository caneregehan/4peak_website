import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 py-8 text-white bg-gradient-to-r from-[#60aebd] to-[#27A267] border border-gray-300 rounded-3xl">
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
            className="text-white transition-colors duration-200 hover:text-white">
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            className="text-white transition-colors duration-200 hover:text-white">
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="text-white transition-colors duration-200 hover:text-white">
            <FaInstagram />
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-right">
          <p className="mb-2">Telefon: +90 123 456 7890</p>
          <p>Adres: 123 Sokak, İstanbul, Türkiye</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-4 text-center">
        <p className="text-sm text-white">
          &copy; 2024 4Peak. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
