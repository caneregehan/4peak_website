"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogoSlider from "./LogoSlider";
import Maps from "./Maps";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("./src/Brands/brands.json") // JSON dosyasının yolu
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  // Animation variants
  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "fade", stiffness: 400 },
    },
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const staggeredSlideIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  return (
    <div className="bg-white section">
      <div className="relative px-6 isolate pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#035882] to-[#2dad63] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Creativity, Change, Grow.
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">
              <Typewriter
                words={["4 Peak Digital"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </h1>
            <motion.p
              ref={subtitleRef}
              initial="hidden"
              whileInView="visible"
              variants={slideInFromRight}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-lg font-medium text-gray-500 text-pretty sm:text-xl">
              4Peak olarak, dijital dünyada markanızı bir adım öne çıkaracak
              çözümler sunuyoruz.
            </motion.p>
            <motion.div
              ref={buttonRef}
              initial="hidden"
              whileInView="visible"
              variants={slideInFromRight}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Başlarken
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900">
                Hakkımızda <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Logo Slider with Animation */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="py-10">
            <LogoSlider />
          </motion.div>
        </section>

        <section className="py-10 bg-transparent sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Lorem, ipsum dolor.
              </h2>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                corrupti?
              </p>
            </div>

            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                  alt=""
                />
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggeredSlideIn}
                transition={{ duration: 0.5 }}
                className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                {[1, 2, 3].map((step) => (
                  <motion.div
                    key={step}
                    variants={
                      step % 2 === 0 ? slideInFromLeft : slideInFromRight
                    }>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <span className="text-xl font-semibold text-gray-700">
                        {" "}
                        {step}{" "}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                      {step === 1
                        ? "lorem ipsum dolor"
                        : step === 2
                        ? "lorem ipsum dolor"
                        : "lorem ipsum dolor"}
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Cards Section */}
        <section>
          <div className="text-center">
            <p className="text-4xl font-bold tracking-wide text-teal-700 uppercase">
              Çalıştığımız Markalar
            </p>
            <div className="w-24 h-1 mx-auto mt-4 bg-green-500"></div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggeredSlideIn}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 mx-auto overflow-hidden md:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                whileHover={{ rotateY: 180 }} // Hover durumunda döndür
                transition={{ duration: 0.6 }} // Dönüş süresi
                variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                className="relative w-32 h-32 mx-auto overflow-hidden bg-transparent rounded-full">
                <div className="absolute inset-0">
                  <a href={brand.social} target="_blank" className="block">
                    <img
                      className="absolute inset-0 object-contain w-full h-full transition duration-500 opacity-100"
                      src={brand.logo}
                      alt={`${brand.title} Logo Background`}
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="py-10">
          <h1 className="text-2xl font-bold text-center m-11">
            Google Maps Haritası
          </h1>
          <Maps />
        </motion.section>
      </div>
    </div>
  );
}
