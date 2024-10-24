
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Social = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Animation variants for sliding in from the left
  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  useEffect(() => {
    if (inView) controls.start("show");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideIn}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            4 Peak Digital
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Sosyal Medya Hesaplarımız</span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Bizi sosyal medya hesaplarımızdan takip edebilirsiniz.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Repeat the structure for your social media links */}
        {socialMediaData.map((data, index) => (
          <div key={index}>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={data.image}
                alt={data.alt}
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  {data.name}
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400"></p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Sample social media data
const socialMediaData = [
  {
    link: "https://istediğiniz-url.com",
    image: "./src/assets/mockup1.png",
    alt: "4peakdigital",
    name: "4peakdigital",
  },
  {
    link: "https://istediğiniz-url.com",
    image: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
    alt: "Andrew Larkin",
    name: "Andrew Larkin",
  },
  {
    link: "https://istediğiniz-url.com",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    alt: "Sophie Denmo",
    name: "Sophie Denmo",
  },
  {
    link: "https://istediğiniz-url.com",
    image: "https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
    alt: "Benedict Caro",
    name: "Benedict Caro",
  },
];
